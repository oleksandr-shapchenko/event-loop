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
  private stack = new Stack();
  private web = new WebApi();
  private queue = new Queue();

  addSyncEvent(event: LoopEvent) {
    this.stack.push(event);
    this.removeSyncEvent();
    return this.stack.collection;
  }
  
  private removeSyncEvent() {
    timer(4000).subscribe(() => {
      this.stack.pop();
      return this.stack.collection;
    })
  }
}
