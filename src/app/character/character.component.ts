import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArmcharService } from '../armchar.service';
import { TimeService } from '../time.service';
import { Character, characterParse, Charsheet, charsheetParse } from '../charsheet';
import { switchMap, merge } from 'rxjs/operators';
import {Observable, EMPTY,of, from } from 'rxjs';

interface Params { char: string,  year: number, season: string }

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  char : string ;
  season : string ;
  year : number ;
  // character: Character | undefined ;
  charsheet: Charsheet | undefined ;
  subs: any ;

  params$: Observable<Params> ;

  storeParams( params: any ) : Params {
     console.log( "storeParams:", params ) ;
     this.char = params['char'] ;
     if ( typeof(params['year']) !== "undefined" &&
          typeof(params['season']) !== "undefined" ) {
        this.timeService.setTime( 
           { "year": params['year'], "season": params['season'] } ) ;
        this.year = params['year'] ;
        this.season = params['season'] ;
     }
     console.log( "character:", this.char ) ;
     return {
        "char" : this.char,
        "year" : params['year'],
        "season" : params['season'] 
     } ;
  }

  constructor( 
       private armcharService: ArmcharService,
       private timeService: TimeService,
       private route: ActivatedRoute,
       ) { }

  ngOnInit(): void {
     console.log( "character starting:", this.char ) ;
     this.params$ = this.route.queryParams.pipe( 
            switchMap( params => { return of(this.storeParams(params) ) } ) ) 
     this.subs =  this.timeService.getTime()
        .pipe( switchMap( (time) => { 
         this.year = time.year ;
         this.season = time.season ;
         console.log( "getTime", this.year, this.season ) ;
         return this.armcharService.getCharsheet( this.char,
                          this.year, this.season ) }) )
	 .subscribe( cs => { console.log("charsheet", cs) ;
	    this.charsheet = charsheetParse( cs ) } ) ;
     this.params$.subscribe( (x) =>
                this.timeService.setTime( 
                   { "year": this.year, "season": this.season } ) ) ;
  }
  prevSeason() : void {
     console.log( "prevSeason() not implemented" ) ;
  }
  nextSeason() : void {
     console.log( "nextSeason() not implemented" ) ;
  }

}
