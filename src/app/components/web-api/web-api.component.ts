import { Component, Input, OnInit } from '@angular/core';
import { SomeEvent } from 'src/app/common/interfaces';

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.scss']
})
export class WebApiComponent {
  collection: Array<SomeEvent> = [];
  @Input() event!: SomeEvent;

    add(event: SomeEvent) {
        this.collection.push(event);
    }

    delete() {
        this.collection.pop();
    }
}
