import { Component, Inject, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TimeService } from '../time.service';


interface Season {
    name: string,
    code: string
}

@Component({
  selector: 'app-season-selector',
  templateUrl: './season-selector.component.html',
  styleUrls: ['./season-selector.component.css']
})
export class SeasonSelectorComponent implements OnInit {


  seasons: Season[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
       private timeService: TimeService) {
        this.seasons = [
            {name: 'Winter', code: 'Winter'},
            {name: 'Spring', code: 'Spring'},
            {name: 'Summer', code: 'Summer'},
            {name: 'Autumn', code: 'Autumn'}
        ];
    this.form = fb.group(
	{year: new FormControl(),
	 season: new FormControl()}
	);
  }

  ngOnInit(): void {
     this.form.valueChanges.subscribe( val => {
        if ( val.year && val.season )
        this.timeService.setTime( { "year": val.year, "season": val.season.name } )
	} ) ;
  }

}

