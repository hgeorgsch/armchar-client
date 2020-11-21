import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArmcharService } from '../armchar.service';
import { Character, characterParse, Charsheet, charsheetParse } from '../charsheet';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  char : string = "cieran" ;
  time : string ;
  character: Character | undefined ;
  charsheet: Charsheet | undefined ;
  subs1: any ;
  subs2: any ;

  constructor( 
       private armcharService: ArmcharService,
       private route: ActivatedRoute,
       ) { }

  ngOnInit(): void {
     console.log( "character starting:", this.char, this.time ) ;
     var obs = this.route.queryParams ;
     this.subs1 =  obs.pipe( switchMap( params => { 
	   this.char = params['char'] ;
	   this.time = params['time']  ;
	   console.log( "character:", this.char, this.time ) ;
           return this.armcharService.getCharacter( this.char ) })  )
	 .subscribe( cs => { console.log("character", cs) ;
	    return this.character = characterParse( cs ) } ) ;
     this.subs2 =  obs.pipe( switchMap( params => { 
	   this.char = params['char'] ;
	   this.time = params['time']  ;
	   console.log( "character:", this.char, this.time ) ;
           return this.armcharService.getCharsheet( this.char, this.time ) }) )
	 .subscribe( cs => { console.log("charsheet", cs) ;
	    return this.charsheet = charsheetParse( cs ) } ) ;

  }
  prevSeason() : void {
     console.log( "prevSeason() not implemented" ) ;
  }
  nextSeason() : void {
     console.log( "nextSeason() not implemented" ) ;
  }

}
