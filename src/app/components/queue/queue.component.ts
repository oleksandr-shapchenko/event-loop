import { Component, Input, OnInit } from '@angular/core';
import { SomeEvent } from 'src/app/common/interfaces';
import { LoopService } from 'src/app/services/loop.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit{
    collection: Array<SomeEvent> = [];
    constructor(
      private loopService: LoopService
    ) {}
    ngOnInit(): void {
      this.collection = this.loopService.queue;
    }
}
