import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  @Input() items: any[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
