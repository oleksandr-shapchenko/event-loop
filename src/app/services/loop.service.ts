import { Injectable } from '@angular/core';

import { delay, delayWhen, filter, finalize, iif, map, mergeMap, Observable, of, pipe, retryWhen, switchMap, take, takeUntil, tap } from 'rxjs';

import { LoopEvent } from '../common/interfaces';
import { Queue } from '../structures/queue/queue';
import { Stack } from '../structures/stack/stack';
import { WebApi } from '../structures/web-api/web-api';

@Injectable({
  providedIn: 'root'
})
export class LoopService {
  public stack = new Stack();
  public web = new WebApi();
  public queue = new Queue();
  
  public handleSyncEvent(event: LoopEvent): Observable<LoopEvent[]> {
    return of(this.stack.push(event)).pipe(
      delay(3500),
      tap(() => this.stack.pop())
    )
  }
    
  public handleAsyncEvent(event: LoopEvent): Observable<LoopEvent[]> {
    return this.placeAsyncInStack(event).pipe(
      switchMap(() => this.placeEventInWebApi(event)),
      switchMap(() => this.placeEventInQueue(event)),
      switchMap(() => this.placeAsyncInStack(event)
      ))
    }    
    
  private placeAsyncInStack(event: LoopEvent): Observable<LoopEvent[]> {
      return of(        
        this.stack.push(event)).pipe(
        delay(1000),
        tap(() => this.stack.pop())
      )
  }
    
  private placeEventInWebApi(event: LoopEvent): Observable<LoopEvent[]> {
    return of(this.web.add(event)).pipe(
      delay(2000),
      tap(() => this.web.remove())
    )
  }
    
  private placeEventInQueue(event: LoopEvent): Observable<LoopEvent[]> {
    return of(this.queue.enqueue(event)).pipe(
      delay(2000),
      tap(
        this.stack.сollectionEmpty.pipe(
          switchMap(() => {
            return iif(() => true,
              of(this.queue.dequeue()),
              of(this.stack.сollectionEmpty.subscribe((res) => { 
                
              }))
            );
          }
          )
        )
      ))
    }
  }


