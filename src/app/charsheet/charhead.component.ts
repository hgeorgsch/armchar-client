import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charhead',
  templateUrl: './charhead.component.html',
  styleUrls: ['./charhead.component.css']
})
export class CharheadComponent implements OnInit {
  
  @Input() charsheet: any ;

  constructor() { }

  ngOnInit(): void {
  }
  get(k): string {
    if ( this.charsheet === undefined ) return "" ;
    if ( "arm:" + k in this.charsheet ) 
       return this.charsheet["arm:"+k] ;
    return "" ;
  } 

}
