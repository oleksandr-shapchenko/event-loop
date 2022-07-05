import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { LoopEvent } from './common/interfaces';
import { LoopService } from './services/loop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public event: LoopEvent | undefined;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public loopService: LoopService) {}

  public onClickSyncEvent() {
    this.event = {
      text: 'Some sync event',
      type: 'sync',
    };
    this.loopService
      .handleSyncEvent(this.event)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {});
  }

  public onClickAsyncEvent() {
    this.event = {
      text: 'Some async event',
      type: 'async',
    };
    this.loopService
      .handleAsyncEvent(this.event)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
