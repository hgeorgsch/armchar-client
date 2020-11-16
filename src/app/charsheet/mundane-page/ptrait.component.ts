import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ptrait',
  templateUrl: './ptrait.component.html',
  styleUrls: ['./ptrait.component.css']
})
export class PtraitComponent implements OnInit {

  @Input() ptrait: any[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
