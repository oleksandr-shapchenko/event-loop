import { Injectable } from '@angular/core';
import { SomeEvent } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoopService {
  stack: Array<SomeEvent> = [];
  web: Array<SomeEvent> = [];
  queue: Array<SomeEvent> = [];

  pushSyncEvent(event: SomeEvent) {
    this.stack.unshift(event);
    return this.stack;
  }

  popSyncEvent() {
    setTimeout(() => {
      this.stack.pop();
    },4000)
  }

  pushAsyncEvent(event: SomeEvent) {
    this.pushSyncEvent(event);
    setTimeout(() => {
      this.stack.splice(0, 1);
      this.web.push(event);
    }, 1000);
    setTimeout(() => {
      this.web.pop();
      this.queue.push(event);
    }, 3000);
    setTimeout(() => {
      this.queue.splice(0, 1);
      this.pushSyncEvent(event);
      this.popSyncEvent();
    }, 4500);
  }
}
