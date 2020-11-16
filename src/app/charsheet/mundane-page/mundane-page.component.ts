import { Component, OnInit, Input } from '@angular/core';
import { Charsheet } from '../../charsheet';

@Component({
  selector: 'app-mundane-page',
  templateUrl: './mundane-page.component.html',
  styleUrls: ['./mundane-page.component.css']
})
export class MundanePageComponent implements OnInit {

  @Input() charsheet: Charsheet  ;
  constructor() { }

  ngOnInit(): void {
  }

  get(k): string {
    if ( this.charsheet === undefined ) return "" ;
    return this.charsheet.get(k) ;
  } 

}
