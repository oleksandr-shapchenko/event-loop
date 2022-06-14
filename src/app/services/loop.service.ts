import { Injectable } from '@angular/core';
import { SomeEvent } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoopService {
  stack: Array<SomeEvent> = [];
  web: Array<SomeEvent> = [];
  queue: Array<SomeEvent> = [];

  addSyncEvent(event: SomeEvent) {
    this.stack.unshift(event);
    this.removeSyncEvent();
    return this.stack;
  }

  removeSyncEvent() {
    setTimeout(() => {
      this.stack.pop();
    },3000)
  }
}
