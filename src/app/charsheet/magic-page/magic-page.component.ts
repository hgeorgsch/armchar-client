import { Component, OnInit, Input } from '@angular/core';
import { Charsheet } from '../../charsheet';

@Component({
  selector: 'app-magic-page',
  templateUrl: './magic-page.component.html',
  styleUrls: ['./magic-page.component.css']
})
export class MagicPageComponent implements OnInit {

  @Input() charsheet: Charsheet  ;

  constructor() { }

  ngOnInit(): void {
  }

  get(k): string {
    if ( this.charsheet === undefined ) return "" ;
    return this.charsheet.get(k) ;
  } 

}
