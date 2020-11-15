import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../../spell';

@Component({
  selector: 'magic-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() spell : Spell ;

  constructor() { }

  ngOnInit(): void {
  }

}
