import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-effect-trait',
  templateUrl: './effect-trait.component.html',
  styleUrls: ['./effect-trait.component.css']
})
export class EffectTraitComponent implements OnInit {

  @Input() trait : any ;

  constructor() { }

  ngOnInit(): void {
  }

}
