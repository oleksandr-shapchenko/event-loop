import { LoopEvent } from 'src/app/common/interfaces';

export class WebApi {
  public collection: Array<LoopEvent> = [];

  public add(el: LoopEvent) {
    this.collection.push(el);
    return this.collection;
  }

  public remove() {
    this.collection.pop();
  }
}
