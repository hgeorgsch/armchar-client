import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.css']
})
export class VisComponent implements OnInit {

  @Input() items: any[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
