import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArmcharService } from '../armchar.service';
import { TimeService } from '../time.service';
import { Character, characterParse, Charsheet, charsheetParse } from '../charsheet';
import { switchMap } from 'rxjs/operators';
import {Observable, EMPTY,of, from } from 'rxjs';

interface Params { char: string,  year: number, season: string }

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  char : string = "cieran" ;
  season : string ;
  year : number ;
  character: Character | undefined ;
  charsheet: Charsheet | undefined ;
  subs1: any ;
  subs2: any ;

  params$: Observable<Params> ;

  storeParams( params: any ) : Params {
     console.log( "storeParams:", params ) ;
     this.char = params['char'] ;
     if ( typeof(params['year']) !== "undefined" &&
          typeof(params['season']) !== "undefined" ) {
        this.timeService.setTime( 
           { "year": params['year'], "season": params['season'] } ) ;
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
            switchMap( params => { return of(this.storeParams(params) ) } ) ) ;
     this.subs1 =  this.params$.pipe( switchMap( (x) => {
           return this.armcharService.getCharacter( this.char ) }))
	 .subscribe( cs => { console.log("character", cs) ;
	    this.character = characterParse( cs ) } ) ;
     this.subs2 =  this.timeService.getTime()
        .pipe( switchMap( (time) => { 
         this.year = time.year ;
         this.season = time.season ;
         return this.armcharService.getCharsheet( this.char,
                          time.year, time.season ) }) )
	 .subscribe( cs => { console.log("charsheet", cs) ;
	    this.charsheet = charsheetParse( cs ) } ) ;

  }
  prevSeason() : void {
     console.log( "prevSeason() not implemented" ) ;
  }
  nextSeason() : void {
     console.log( "nextSeason() not implemented" ) ;
  }

}
