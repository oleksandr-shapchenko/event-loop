import { Component, OnInit } from '@angular/core';
import { SomeEvent } from 'src/app/common/interfaces';
import { LoopService } from 'src/app/services/loop.service';

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.scss']
})
export class WebApiComponent implements OnInit {
  collection: Array<SomeEvent> = [];
  constructor(
    private loopService: LoopService
  ) {}
  
  ngOnInit(): void {
   this.collection = this.loopService.web;
  }
}
