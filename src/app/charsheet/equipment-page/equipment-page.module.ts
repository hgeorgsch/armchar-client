import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment.component';



@NgModule({
  declarations: [EquipmentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EquipmentComponent,
  ]
})
export class EquipmentPageModule { }
