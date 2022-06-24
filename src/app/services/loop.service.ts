import { Injectable } from '@angular/core';

import { concatMap, of, switchMap, timer } from 'rxjs';

import { LoopEvent } from '../common/interfaces';
import { Queue } from '../structures/queue/queue';
import { Stack } from '../structures/stack/stack';
import { WebApi } from '../structures/web-api/web-api';

@Injectable({
  providedIn: 'root'
})
export class LoopService {
  public stack = new Stack();
  public web = new WebApi();
  public queue = new Queue();

  public handleSyncEvent(event: LoopEvent) {
    const sourse = () => {
      this.stack.push(event);
      this.stack.pop();
    }
    return of(sourse);
  }

  public handleAsyncEvent(event: LoopEvent) {
    return this.handleAsyncInStack(event).pipe(
      switchMap(() => {
        return this.handleEventInWebApi(event);
      }),
        switchMap(() => {
          return this.handleEventInQueue(event);
        }),
          switchMap(() => {
          return this.handleAsyncInStack(event);
        }))
      }
      
    private handleAsyncInStack(event: LoopEvent) {
      const source = () => {
        this.stack.push(event);
        this.stack.pop();
      }
      return of(source)
    }

  private handleEventInWebApi(event: LoopEvent) {
    const source = () => {
      this.web.add(event);
        this.web.remove();
    }
    return of(source);
  }

  private handleEventInQueue(event: LoopEvent) {
    const source = () => {
      this.queue.enqueue(event);
      this.queue.dequeue();
    }
    return of(source);
  }
}
