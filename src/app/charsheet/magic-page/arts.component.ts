import { Component, OnInit, Input } from '@angular/core';
import { TraitList } from '../../trait';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  @Input() ablist : TraitList ;

  constructor() { }

  ngOnInit(): void {
  }

}
