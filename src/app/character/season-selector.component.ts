import { Component, Inject, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


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

  constructor(private fb: FormBuilder) {
        this.seasons = [
            {name: 'Winter', code: 'Winter'},
            {name: 'Spring', code: 'Spring'},
            {name: 'Summer', code: 'Summer'},
            {name: 'Autumn', code: 'Autumn'}
        ];
    this.form = fb.group(
	{year: 1220},
	{season: 1220}
	);
  }

  ngOnInit(): void {
  }

}

