import { Component, OnInit, Input } from '@angular/core';
import { AbilityList } from '../../ability';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  @Input() ablist: AbilityList ;

  constructor() { }

  ngOnInit(): void {
  }

}
