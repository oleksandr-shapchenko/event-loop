import { LoopEvent } from 'src/app/common/interfaces';

export class Queue {
  public collection: Array<LoopEvent> = [];
  
  enqueue(el: LoopEvent) {
    this.collection.push(el);
    return this.collection;
  }
  
  dequeue() {
   return this.collection.shift();
  }
  
  size() {
    return this.collection.length;
  }
}
