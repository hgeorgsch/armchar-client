import { Component, OnInit, Input } from '@angular/core';
import { Charsheet, charsheetParse } from '../../charsheet';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  @Input() charsheet: Charsheet ;

  constructor() { }

  ngOnInit(): void {
  }

}
