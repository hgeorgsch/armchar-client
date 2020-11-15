import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../spell';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  @Input() spells : Spell[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
