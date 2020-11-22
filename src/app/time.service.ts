import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { Time } from './time' ;

interface Time { season: string, year: number }

@Injectable({
  providedIn: 'root'
})
export class TimeService {

    private subject = new Subject<Time>();
    private current : Time ;

    constructor() { }

    setTime(time: Time) {
       console.log( "setTime", time ) ;
       this.subject.next( time );
    }

    getTime(): Observable<Time> {
        return this.subject.asObservable();
    }

}
