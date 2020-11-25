import { Component, OnInit, Input } from '@angular/core';
import { Ability } from '../../ability';

@Component({
  selector: 'ability-description',
  templateUrl: './ability-description.component.html',
  styleUrls: ['./ability-description.component.css']
})
export class AbilityDescriptionComponent implements OnInit {

  @Input() ability : Ability ;

  constructor() { }

  ngOnInit(): void {
     console.log( this.ability );
  }

}
