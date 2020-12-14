import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ArmcharService } from './armchar.service';
import { Character, characterParse } from './charsheet';
import { CharacterAdvancement, parseCharacterAdvancements } from './advancement';


@Component({
  selector: 'app-page-advancements',
  templateUrl: './page-advancements.component.html',
  styleUrls: ['./page-advancements.component.css']
})
export class PageAdvancementsComponent implements OnInit {

  charname: string ;
  character: Character ;
  subs: any ;

  constructor( 
       private armcharService: ArmcharService,
       private route: ActivatedRoute,
       ) { }
  paramParse( params ) {
       this.charname = params['char'];
       console.log( "Params", this.charname ) ;
       return ;
  }

  ngOnInit(): void {
     this.subs = this.route.queryParams.subscribe(
	  params => this.paramParse( params )  ) 
  }

}
