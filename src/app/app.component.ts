import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoopEvent } from './common/interfaces';
import { LoopService } from './services/loop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  event: LoopEvent | undefined;
  unSubscriber = new Subscription();

  constructor(
    public loopService: LoopService
  ) {}
  
  ngOnDestroy(): void {
   this.unSubscriber.unsubscribe();
  }

  onClickSyncEvent() {
    this.event = {
      text: 'Some sync event',
      type: 'sync'
    };
    this.unSubscriber.add(
      this.loopService.handleSyncEvent(this.event).subscribe(() => {})
    )
  }

  onClickAsyncEvent() {
    this.event = {
      text: 'Some async event',
      type: 'async'
    };
    this.unSubscriber.add(
    this.loopService.handleAsyncEvent(this.event).subscribe(() => {})
    )
  }
}
