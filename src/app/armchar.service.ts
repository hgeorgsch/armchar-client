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
     const cid = `armchar:${id}#${t}`;
     return this.http.get<Charsheet>(url).pipe( map( j => this.process(j,cid) ) ) ;
  }
  process(j:any,cid:string): any {
	console.log( cid ) ;
	var g = j["@graph"] ;
        var r = {} ;
	g.forEach( (el) => { r[el["@id"]] = el } ) ;
	var rr = r[cid] ;
	for ( let key in rr ) {
	  if ( rr[key] instanceof Array ) {
	     rr[key] = rr[key].map( k => r[k["@id"]] ) ;
	  }
	  if ( rr[key] instanceof Object && '@id' in rr[key] ) {
	     rr[key] = [  r[rr[key]["@id"]] ] ;
	  }
	}
	console.log( rr ) ;
	return rr ;
  }

  private log(message: string) {
	// this.messageService.add(`HeroService: ${message}`);
  }

}