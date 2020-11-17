import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArmcharService } from '../armchar.service';
import { Charsheet, charsheetParse } from '../charsheet';
import { Trait } from '../trait';
import { switchMap } from 'rxjs/operators';


// import * as jsonld from 'jsonld';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.css']
})
export class CharsheetComponent implements OnInit {

  char = "cieran" ;
  time = "winter1224" ;
  charsheet: Charsheet | undefined ;
  subs: any ;

  constructor( 
       private armcharService: ArmcharService,
       private route: ActivatedRoute,
       ) { }
  paramParse( params ) {
       this.char = params['char'];
       this.time = params['time'];
       console.log( "Params", this.char, this.time ) ;
       return ;
  }

  ngOnInit(): void {
     // this.route.queryParams.subscribe( this.paramParse });
     // this.subs = this.armcharService.getCharsheet( this.char, this.time )
	 // .subscribe( cs => this.charsheet = charsheetParse( cs ) )

     this.subs = this.route.queryParams.pipe(
         switchMap( params => { this.paramParse( params )  ;
           return this.armcharService.getCharsheet( this.char, this.time ) 
    }) )
	 .subscribe( cs => { console.log(cs) ;
	    return this.charsheet = charsheetParse( cs ) } ) 

  }

  get(k): string {
    if ( this.charsheet === undefined ) return "" ;
    return this.charsheet.get(k) ;
  } 

}
