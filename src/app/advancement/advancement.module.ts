import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancementComponent } from './advancement.component';
import { CharacterAdvancementComponent } from './character-advancement.component';



@NgModule({
  declarations: [AdvancementComponent, CharacterAdvancementComponent],
  imports: [
    CommonModule
  ]
})
export class AdvancementModule { }
