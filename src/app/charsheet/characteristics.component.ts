import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  @Input() charlist: any[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
