import { LoopEvent } from 'src/app/common/interfaces';

export class Queue {
  public collection: Array<LoopEvent> = [];
  
  public enqueue(el: LoopEvent) {
    this.collection.push(el);
    return this.collection;
  }
  
  public dequeue() {
    this.collection.shift();
    return this.collection;
  }
}
