import { Component, OnInit } from '@angular/core';
import { ArmcharService } from '../armchar.service';
import { Character, characterParse } from '../charsheet';
import { CharacterAdvancement, parseCharacterAdvancements } from '../advancement';

@Component({
  selector: 'app-character-advancement',
  templateUrl: './character-advancement.component.html',
  styleUrls: ['./character-advancement.component.css']
})
export class CharacterAdvancementComponent implements OnInit {

  constructor( private armcharService: ArmcharService ) { }

  ngOnInit(): void {
     this.subs = this.armcharService.getCharacter( this.char, this.time )
	 .subscribe( cs => this.charsheet = characterParse( cs ) ) 
  }

}
