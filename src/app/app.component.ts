import { Component } from '@angular/core';
import { SomeEvent } from './common/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  event!: SomeEvent;

  onClickSyncEvent() {
    this.event = {
      text: "Some sync event",
      type: "sync"
    }
    console.log(this.event)
  }

  onClickAsyncEvent() {
    this.event = {
      text: "Some async event",
      type: "async"
    }

    console.log(this.event)
  }
}
