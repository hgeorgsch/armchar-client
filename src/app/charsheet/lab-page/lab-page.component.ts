import { Component, OnInit, Input } from '@angular/core';
import { Charsheet, charsheetParse } from '../../charsheet';

@Component({
  selector: 'app-lab-page',
  templateUrl: './lab-page.component.html',
  styleUrls: ['./lab-page.component.css']
})
export class LabPageComponent implements OnInit {

  @Input() charsheet: Charsheet ;
  

  constructor() { }

  ngOnInit(): void {
  }

}
