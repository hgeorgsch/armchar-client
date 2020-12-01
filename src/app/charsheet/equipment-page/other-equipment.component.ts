import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-equipment',
  templateUrl: './other-equipment.component.html',
  styleUrls: ['./other-equipment.component.css']
})
export class OtherEquipmentComponent implements OnInit {

  @Input() items: any[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
