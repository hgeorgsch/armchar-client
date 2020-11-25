import { Component, OnInit, Input } from '@angular/core';
import { Ability, AbilityList } from '../../ability';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  @Input() ablist: AbilityList ;

  details: boolean = false ;
  ability: Ability ;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect( ability: Ability ) : void {
     this.ability = ability ;
     this.details = true ;
     console.log( this.details, this.ability ) ;
  }


}
