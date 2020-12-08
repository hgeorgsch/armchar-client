import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancementComponent } from './advancement.component';
import { CharacterAdvancementComponent } from './character-advancement.component';

import {CardModule} from 'primeng/card';
import { PipesModule} from '../pipes/pipes.module';


@NgModule({
  declarations: [AdvancementComponent, CharacterAdvancementComponent, ],
  imports: [
    CommonModule,
    CardModule,
    PipesModule,
  ],
  exports: [
     CharacterAdvancementComponent 
  ]
})
export class AdvancementModule { }
