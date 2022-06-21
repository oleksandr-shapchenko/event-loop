import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

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

  handleSyncEvent(event: LoopEvent) {
    this.stack.push(event);
    this.removeSyncEvent();
  }
  
  private removeSyncEvent() {
    timer(5500).subscribe(() => {
      this.stack.pop();
    })
  }

  handleAsyncEvent(event: LoopEvent) {
    this.stack.push(event);
    this.removeAsyncEvent();
    timer(1000).subscribe(() => {
      this.handleEventInWebApi(event);
    });
    timer(3000).subscribe(() => {
      this.handleEventInQueue(event);
    });
    timer(5000).subscribe(() => {
      this.handleSyncEvent(event);
    })
  }

  private removeAsyncEvent() {
    timer(1000).subscribe(() => {
      this.stack.collection.shift();
    })
  }

  private handleEventInWebApi(event: LoopEvent) {
    this.web.add(event);
    timer(2000).subscribe(() => {
      this.web.remove();
    })
  }

  private handleEventInQueue(event: LoopEvent) {
    this.queue.enqueue(event);
    timer(2000).subscribe(() => {
      this.queue.dequeue();
    })
  }
}
