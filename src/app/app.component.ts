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

  constructor(
    public loopService: LoopService
  ) {}

  onClickSyncEvent() {
    this.event = {
      text: 'Some sync event',
      type: 'sync'
    };
    this.loopService.handleSyncEvent(this.event);
  }

  onClickAsyncEvent() {
    this.event = {
      text: 'Some async event',
      type: 'async'
    };
    this.loopService.handleAsyncEvent(this.event);
  }
}
