import { LoopEvent } from 'src/app/common/interfaces';

export class Queue {
  public collection: Array<LoopEvent> = [];

  public enqueue(el: LoopEvent): LoopEvent[] {
    this.collection.push(el);
    return this.collection;
  }

  public dequeue(): LoopEvent[] {
    this.collection.shift();
    return this.collection;
  }
}
