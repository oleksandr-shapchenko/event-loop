import { Injectable } from '@angular/core';

import { delay, delayWhen, of, switchMap, tap } from 'rxjs';

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
    return of(this.stack.push(event)).pipe(
      delay(2000),
      tap(() => this.stack.pop())
    )
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
      return of(this.stack.push(event)).pipe(
        delay(2000),
        tap(() => this.stack.pop())
      )
      }

  private handleEventInWebApi(event: LoopEvent) {
    return of(this.web.add(event)).pipe(
      delay(2000),
      tap(() => this.web.remove())
    )
    }

  private handleEventInQueue(event: LoopEvent) {
    return of(this.queue.enqueue(event)).pipe(
      delay(2000),
      tap(() => this.queue.dequeue())
    )
    }
  }
