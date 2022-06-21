import { Injectable } from '@angular/core';
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

  addSyncEvent(event: LoopEvent) {
    this.stack.push(event);
    return this.stack.collection;
  }
}
