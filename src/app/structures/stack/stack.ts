import { LoopEvent } from "src/app/common/interfaces";

export class Stack {
  public collection: Array<LoopEvent> = [];
  
  push(el: LoopEvent) {
    this.collection.unshift(el);
    return this.collection;
  }
  
  pop() {
    return this.collection.pop();
  }
  
  size() {
    return this.collection.length;
  }
  
  peek() {
    return this.collection.length ? this.collection[0] : null;
  }
  
  isEmpty() {
    return this.collection.length === 0;
  }
  
  isFull() {
    return this.collection.length !== 0;
  }
}
