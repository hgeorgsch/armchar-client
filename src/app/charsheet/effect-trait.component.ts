import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { Trait } from '../trait';

@Component({
  selector: 'app-effect-trait',
  templateUrl: './effect-trait.component.html',
  styleUrls: ['./effect-trait.component.css']
})
export class EffectTraitComponent implements OnInit {

  @Input() trait : Trait ;

  effects : string | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log( this.trait ) ;
    if ( this.trait ) this.effects = this.trait.getEffect() ;
  }

}
