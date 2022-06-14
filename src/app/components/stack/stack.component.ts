import { Component, Input, OnInit } from '@angular/core';
import { SomeEvent } from 'src/app/common/interfaces';
import { LoopService } from 'src/app/services/loop.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit { 
  collection: Array<SomeEvent> = [];
  constructor(
    private loopService: LoopService
  ) {}
  ngOnInit(): void {
   this.collection = this.loopService.stack;
  }
  
}
