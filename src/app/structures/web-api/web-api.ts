import { LoopEvent } from "src/app/common/interfaces";

export class WebApi {
  public collection: Array<LoopEvent> = [];

  add(el: LoopEvent) {
    this.collection.push(el);
    return this.collection;
  }

  remove() {
    this.collection.pop();
  }
}
