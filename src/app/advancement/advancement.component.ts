import { Component, OnInit, Input } from '@angular/core';
import { CharacterAdvancement } from '../advancement';

@Component({
  selector: 'app-advancement',
  templateUrl: './advancement.component.html',
  styleUrls: ['./advancement.component.css']
})
export class AdvancementComponent implements OnInit {

  @Input() adv : CharacterAdvancement ;

  constructor() { }

  ngOnInit(): void {
  }

}
