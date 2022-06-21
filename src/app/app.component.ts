import { Component } from '@angular/core';
import { LoopEvent } from './common/interfaces';

import { LoopService } from './services/loop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  event: LoopEvent | undefined;
  stackList: Array<LoopEvent> = [];

  constructor(
    private loopService: LoopService
  ) {}

  onClickSyncEvent() {
    this.event = {
      text: "Some sync event",
      type: "sync"
    };
    this.stackList = this.loopService.addSyncEvent(this.event);
  }

  onClickAsyncEvent() {
    this.event = {
      text: "Some async event",
      type: "async"
    };
    console.log(this.event)
  }
}
