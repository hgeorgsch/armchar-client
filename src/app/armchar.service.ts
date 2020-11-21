import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Character, Charsheet } from './charsheet';
import { Saga } from './saga';
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

  getSaga(id: string): Observable<Saga> {
     const url = `${this.charsheetURI}${id}`;
     const cid = `armchar:${id}`;
     return this.http.get<Saga>(url).pipe( map( j => this.process(j,cid) ) ) ;
  }

  getCharacter(id: string): Observable<Character> {
     const url = `${this.charsheetURI}${id}`;
     const cid = `armchar:${id}`;
     console.log( url ) ;
     return this.http.get<Character>(url).pipe( map( j => this.process(j,cid) ) ) ;
  }
  getCharsheet(id: string, t:string): Observable<Charsheet> {
     const url = `${this.charsheetURI}${id}/${t}`;
     const cid = `armchar:${id}#${t}`;
     console.log( url ) ;
     return this.http.get<Charsheet>(url).pipe( 
	 map( j => this.processFramed(j) ) ) ;
  }
  getCharsheetPost( uri: string ): Observable<Charsheet> {
     const url = `${this.charsheetURI}`;
     const cid = uri ; // `armchar:${id}#${t}`;
   const headers = new HttpHeaders().set(
     'Content-Type',
    'application/x-www-form-urlencoded;'
   );
     console.log( uri, url ) ;
     return this.http.post<Charsheet>(
	url,
	url,
        {headers: headers }
	).pipe( map( j => this.process(j,cid) ) ) ;
  }


2


  processFramed(j:any): any {
	console.log( "processFramed", j ) ;
	if ( ( "@type" in j ) ) return j ;
	if ( ! ( "@graph" in j ) ) return undefined ;
	var g = j["@graph"] ;
	console.log( "graph", g ) ;
	var cs = g[0] ;
	cs["@context"] = j["@context"] ;
	console.log( "processFramed", cs ) ;
	return cs ;
  }

  private log(message: string) {
	// this.messageService.add(`HeroService: ${message}`);
  }

}
