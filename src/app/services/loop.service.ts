import { Injectable } from '@angular/core';

import { of, switchMap, timer } from 'rxjs';

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
    this.stack.push(event);
    this.removeSyncEvent();
  }
  
  private removeSyncEvent() {
    timer(5500).subscribe(() => {
      this.stack.pop();
    })
  }

  public handleAsyncEvent(event: LoopEvent) {
    return this.handleAsyncInStack(event).pipe(
      switchMap(() => {
        this.handleEventInWebApi(event);
        this.handleEventInQueue(event);
        return this.handleAsyncInStack(event);
      }))
    }

  private handleAsyncInStack(event: LoopEvent) {
    const source = () => {
      this.stack.push(event);
      timer(2000).subscribe(() => {
        this.stack.collection.shift();
      })
    }
    return of(source);
  }

  private handleEventInWebApi(event: LoopEvent) {
    const source = () => {
      this.web.add(event);
      timer(2000).subscribe(() => {
        this.web.remove();
      });
    }
    return of(source);
  }

  private handleEventInQueue(event: LoopEvent) {
    const source = () => {
      this.queue.enqueue(event);
      timer(2000).subscribe(() => {
      this.queue.dequeue();
    })
    }
    return of(source);
  }
}
