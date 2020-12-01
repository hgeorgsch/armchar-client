import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment.component';
import { VisComponent } from './vis.component';
import { WeaponsComponent } from './weapons.component';
import { OtherEquipmentComponent } from './other-equipment.component';



@NgModule({
  declarations: [EquipmentComponent, VisComponent, WeaponsComponent, OtherEquipmentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EquipmentComponent,
  ]
})
export class EquipmentPageModule { }
