import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Charsheet, charsheetParse } from '../charsheet';
import { Trait } from '../trait';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.css']
})
export class CharsheetComponent implements OnInit {
 
  @Input() charsheet : Charsheet ;

  subs: any ;

  constructor( ) { }

  ngOnInit(): void {
  }

  get(k): string {
    if ( this.charsheet === undefined ) return "" ;
    return this.charsheet.get(k) ;
  } 

}
