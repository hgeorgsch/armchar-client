import { Component, OnInit, Input } from '@angular/core';
import { Trait } from '../../trait';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  @Input() trait : Trait ;

  constructor() { }

  ngOnInit(): void {
  }

}
