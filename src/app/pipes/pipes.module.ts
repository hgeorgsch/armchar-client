import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScorePipe } from './score.pipe';

@NgModule({
  declarations: [
    ScorePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScorePipe,
  ]
})
export class PipesModule { }
