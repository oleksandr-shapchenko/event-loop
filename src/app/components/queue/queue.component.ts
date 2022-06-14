import { Component, Input, OnInit } from '@angular/core';
import { SomeEvent } from 'src/app/common/interfaces';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent {
    collection: Array<SomeEvent> = [];
    @Input() event!: SomeEvent;
    
    enqueue(event: SomeEvent) {
    this.collection.push(event);
  }
  
  dequeue() {
   return this.collection.shift();
  }
  
  size() {
    return this.collection.length;
  }

}
