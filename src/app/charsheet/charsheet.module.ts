import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharsheetRoutingModule } from './charsheet-routing.module';

import { CharsheetComponent } from './charsheet.component';
import { CharheadComponent } from './charhead.component';

import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';


import { MagicPageModule } from './magic-page/magic-page.module';
import { MundanePageModule } from './mundane-page/mundane-page.module';
import { EquipmentPageModule } from './equipment-page/equipment-page.module';
import { LabPageModule } from './lab-page/lab-page.module';

@NgModule({
  declarations: [
    CharsheetComponent,
    CharheadComponent,
  ],
  imports: [
    CommonModule,
    CharsheetRoutingModule,
    PanelModule,
    TableModule,
    TabViewModule,
    CardModule,
    SidebarModule,
    MundanePageModule,
    MagicPageModule,
    EquipmentPageModule, 
    LabPageModule,
  ],
  exports: [
    CharsheetComponent,
    CharheadComponent,
  ],
})
export class CharsheetModule { }
