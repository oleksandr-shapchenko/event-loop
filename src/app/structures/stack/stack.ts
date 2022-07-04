import { Subject } from 'rxjs';
import { LoopEvent } from 'src/app/common/interfaces';

export class Stack {
  public collection: Array<LoopEvent> = [];
  сollectionEmpty: Subject<boolean> = new Subject<boolean>();
  
  public push(el: LoopEvent) {
    this.collection.unshift(el);
    return this.collection;
  }
  
  public pop() {
    this.collection.pop();
    if(!this.collection.length) {
      this.сollectionEmpty.next(true);
    }
    return this.collection;
  }
}
