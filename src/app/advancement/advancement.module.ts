import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancementComponent } from './advancement.component';
import { CharacterAdvancementComponent } from './character-advancement.component';
import { PageAdvancementsComponent } from './page-advancements.component';



@NgModule({
  declarations: [AdvancementComponent, CharacterAdvancementComponent, PageAdvancementsComponent],
  imports: [
    CommonModule
  ]
})
export class AdvancementModule { }
