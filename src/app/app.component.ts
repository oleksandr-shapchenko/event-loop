import { Component } from '@angular/core';
import { SomeEvent } from './common/interfaces';
import { LoopService } from './services/loop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  event!: SomeEvent;

  constructor(
    private loopService: LoopService
  ) {}

  onClickSyncEvent() {
    this.event = {
      text: "Some sync event",
      type: "sync"
    };
    this.loopService.pushSyncEvent(this.event);
    this.loopService.popSyncEvent();
  }

  onClickAsyncEvent() {
    this.event = {
      text: "Some async event",
      type: "async"
    };
    this.loopService.pushAsyncEvent(this.event);
  }
}
