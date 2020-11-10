import { Component, OnInit } from '@angular/core';
import { ArmcharService } from '../armchar.service';

import * as jsonld from 'jsonld';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.css']
})
export class CharsheetComponent implements OnInit {

  char = "cieran" ;
  time = "winter1224" ;
  charsheet: any ;
  subs: any ;

  constructor( private armcharService: ArmcharService ) { }

  ngOnInit(): void {
     this.subs = this.armcharService.getCharsheet( this.char, this.time )
	 .subscribe( cs => this.charsheet = jsonld.expand( cs => jsonld.frame(cs),this.frame) ) 
  } ;


}
