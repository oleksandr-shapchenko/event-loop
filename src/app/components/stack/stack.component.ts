import { Component, Input, OnInit } from '@angular/core';
import { SomeEvent } from 'src/app/common/interfaces';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  collection: Array<SomeEvent> = [];
  @Input() event!: SomeEvent;

  push(event: SomeEvent) {
    this.collection.unshift(event);
  }
  
  pop() {
    return this.collection.pop();
  }
  
  isEmpty() {
    return this.collection.length === 0;
  }
}
