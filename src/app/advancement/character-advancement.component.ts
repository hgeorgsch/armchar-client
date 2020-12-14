import { Component, OnInit, Input } from '@angular/core';
import { Character, characterParse } from '../charsheet';
import { CharacterAdvancement, parseCharacterAdvancementList } from '../advancement';
import { ArmcharService } from '../armchar.service';
import { switchMap, merge } from 'rxjs/operators';
import { BehaviorSubject, Observable, EMPTY,of, from } from 'rxjs';

@Component({
  selector: 'app-character-advancement',
  templateUrl: './character-advancement.component.html',
  styleUrls: ['./character-advancement.component.css']
})
export class CharacterAdvancementComponent implements OnInit {

  // @Input() char : Character ;
  @Input() charname : string ;
  char : any ;
  subs : any ;
  advancementlist : any[] ;
  char$ : BehaviorSubject<string> ;

  constructor( private armcharService: ArmcharService, ) { }

  ngOnInit(): void {
     this.char$ = new BehaviorSubject( this.charname ) ;
     this.subs = this.char$
        .pipe( 
          switchMap( x => this.armcharService.getAdvancements( x ) )
	).subscribe( cs => { console.log("Advancements", cs) ;
	    return this.advancementlist =
              parseCharacterAdvancementList( cs["arm:hasAdvancementList"] ) },
          err => {
            if ( err.status = 404 ) { 
                console.log( "404 - resource not found" ) ;
                return [] ; 
            } else { console.log( err ) ; return [] ; } 
     } ) 
  }
  ngOnChanges (): void {
     if ( typeof(this.char$) !== "undefined" ) this.char$.next( this.charname ) ;
  }


}
