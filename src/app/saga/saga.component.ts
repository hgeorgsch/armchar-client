import { Component, OnInit } from '@angular/core';
import { ArmcharService } from '../armchar.service';
import { Saga, sagaParse } from '../saga';

@Component({
  selector: 'app-saga',
  templateUrl: './saga.component.html',
  styleUrls: ['./saga.component.css']
})
export class SagaComponent implements OnInit {

  char = "contestedlands" ;
  saga: Saga | undefined ;
  subs: any ;

  constructor( private armcharService: ArmcharService ) { }

  ngOnInit(): void {
     this.subs = this.armcharService.getSaga( this.char )
	 .subscribe( cs => this.saga = sagaParse( cs ) ) 
  }

}
