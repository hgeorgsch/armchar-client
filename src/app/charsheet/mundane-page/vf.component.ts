import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vf',
  templateUrl: './vf.component.html',
  styleUrls: ['./vf.component.css']
})
export class VfComponent implements OnInit {
  @Input() vf: any[] ;
  @Input() type: string ;

  constructor() { }

  ngOnInit(): void {
  }

  getScore(t) : number {
     if ( "arm:hasScore" in t ) t = t["arm:hasScore"] ;
     if ( typeof(t) === "number" ) return t ;
     if ( "@value" in t ) t = t["@value"] ;
     return t ;
  }

}
