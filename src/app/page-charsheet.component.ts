import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArmcharService } from './armchar.service';
import { Charsheet, charsheetParse } from './charsheet';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-charsheet',
  templateUrl: './page-charsheet.component.html',
  styleUrls: ['./page-charsheet.component.css']
})
export class PageCharsheetComponent implements OnInit {

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
     this.subs = this.route.queryParams.pipe(
         switchMap( params => { this.paramParse( params )  ;
           return this.armcharService.getCharsheet2( this.char, this.time ) 
    }) )
	 .subscribe( cs => { console.log(cs) ;
	    return this.charsheet = charsheetParse( cs ) } ) 

  }

  get(k): string {
    if ( this.charsheet === undefined ) return "" ;
    return this.charsheet.get(k) ;
  } 

}
