import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArmcharService } from '../armchar.service';
import { Character, characterParse, Charsheet, charsheetParse } from '../charsheet';
import { switchMap } from 'rxjs/operators';
import {Observable,of, from } from 'rxjs';

interface Params { char: string, time: string,  year: number, season: string }

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  char : string = "cieran" ;
  time : string ;
  season : string ;
  year : number ;
  character: Character | undefined ;
  charsheet: Charsheet | undefined ;
  subs1: any ;
  subs2: any ;

  params$: Observable<Params> ;

  storeParams( params: any ) : Params {
     this.char = params['char'] ;
     this.time = params['time']  ;
     this.year = params['year']  ;
     this.season = params['season']  ;
     console.log( "character:", this.char, this.time, this.year, this.season ) ;
     return {
        "char" : this.char,
        "time" : this.time,
        "year" : this.year,
        "season" : this.season 
     } ;
  }

  constructor( 
       private armcharService: ArmcharService,
       private route: ActivatedRoute,
       ) { }

  ngOnInit(): void {
     console.log( "character starting:", this.char, this.time ) ;
     this.params$ = this.route.queryParams.pipe( 
               params => { return of(this.storeParams(params) ) } ) ;
     this.subs1 =  this.params$.pipe( switchMap( (x) => {
           return this.armcharService.getCharacter( this.char ) }))
	 .subscribe( cs => { console.log("character", cs) ;
	    this.character = characterParse( cs ) } ) ;
     this.subs2 =  this.params$.pipe( switchMap( (x) => { 
         return this.armcharService.getCharsheet( this.char,
                          this.year, this.season ) }) )
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
