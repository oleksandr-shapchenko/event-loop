import { LoopEvent } from 'src/app/common/interfaces';

export class Stack {
  public collection: Array<LoopEvent> = [];
  
  public push(el: LoopEvent) {
    this.collection.unshift(el);
    return this.collection;
  }
  
  public pop() {
    return this.collection.pop();
  }
}
