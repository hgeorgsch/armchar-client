import { Component, OnInit } from '@angular/core';
import { ArmcharService } from '../armchar.service';
import { Character, characterParse } from '../charsheet';
import { CharacterAdvancement, parseCharacterAdvancements } from '../advancement';

@Component({
  selector: 'app-page-advancements',
  templateUrl: './page-advancements.component.html',
  styleUrls: ['./page-advancements.component.css']
})
export class PageAdvancementsComponent implements OnInit {

  char: Character ;
  subs: any ;

  constructor( private armcharService: ArmcharService ) { }

  ngOnInit(): void {
     this.subs = this.armcharService.getCharacter( this.char, this.time )
	 .subscribe( cs => this.char = characterParse( cs ) ) 
  }

}
