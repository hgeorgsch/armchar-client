import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Charsheet } from './charsheet';
// import { MessageService } from './message.service';

// import * as jsonld from 'jsonld';
// var jsonldp = jsonld.promises ;


@Injectable({
  providedIn: 'root'
})
export class ArmcharService {

  charsheetURI = 'http://localhost:8080/armchar/Character/' ;

  constructor(
    private http: HttpClient
    // public messageService: MessageService
  ) { }

  getCharsheet(id: string, t:string): Observable<Charsheet> {
     const url = `${this.charsheetURI}${id}/${t}`;
     return this.http.get<Charsheet>(url) ;
  }

  private log(message: string) {
	// this.messageService.add(`HeroService: ${message}`);
  }

}
