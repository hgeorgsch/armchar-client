import { Component, OnInit, Input } from '@angular/core';
import { CharacteristicList } from '../../characteristic';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  @Input() charlist: CharacteristicList ;

  constructor() { }

  ngOnInit(): void {
  }

}
