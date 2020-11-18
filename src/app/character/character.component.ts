import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArmcharService } from '../armchar.service';
import { Character, characterParse } from '../charsheet';
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
  subs: any ;

  constructor( 
       private armcharService: ArmcharService,
       private route: ActivatedRoute,
       ) { }

  ngOnInit(): void {
     this.subs = this.route.queryParams.pipe(
	 switchMap( params => { this.char = params['char'] ; 
	   this.time = params['time'] || undefined ; 
           return this.armcharService.getCharacter( this.char ) 
    }) )
	 .subscribe( cs => { console.log(cs) ;
	    return this.character = characterParse( cs ) } ) 

  }

}
