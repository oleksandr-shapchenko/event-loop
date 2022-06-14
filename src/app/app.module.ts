import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StackComponent } from './components/stack/stack.component';
import { QueueComponent } from './components/queue/queue.component';
import { WebApiComponent } from './components/web-api/web-api.component';

@NgModule({
  declarations: [
    AppComponent,
    StackComponent,
    QueueComponent,
    WebApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
