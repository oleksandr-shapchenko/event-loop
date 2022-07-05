import { LoopEvent } from 'src/app/common/interfaces';

export class WebApi {
  public collection: Array<LoopEvent> = [];

  public add(el: LoopEvent): LoopEvent[] {
    this.collection.push(el);
    return this.collection;
  }

  public remove(): LoopEvent[] {
    this.collection.pop();
    return this.collection;
  }
}
