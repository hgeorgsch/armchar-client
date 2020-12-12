import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment.component';
import { VisComponent } from './vis.component';
import { WeaponsComponent } from './weapons.component';
import { OtherEquipmentComponent } from './other-equipment.component';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import { PipesModule} from '../../pipes/pipes.module';



@NgModule({
  declarations: [EquipmentComponent, VisComponent, WeaponsComponent, OtherEquipmentComponent],
  imports: [
    CommonModule,
    PanelModule,
    AccordionModule,
    PipesModule,
  ],
  exports: [
    EquipmentComponent,
  ]
})
export class EquipmentPageModule { }
