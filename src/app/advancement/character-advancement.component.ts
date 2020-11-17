import { Component, OnInit, Input } from '@angular/core';
import { Character, characterParse } from '../charsheet';
import { CharacterAdvancement, parseCharacterAdvancements } from '../advancement';

@Component({
  selector: 'app-character-advancement',
  templateUrl: './character-advancement.component.html',
  styleUrls: ['./character-advancement.component.css']
})
export class CharacterAdvancementComponent implements OnInit {

  @Input() char : Character ;

  constructor(  ) { }

  ngOnInit(): void {
  }

}
