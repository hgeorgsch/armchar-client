import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';

import { MagicPageComponent } from './magic-page.component';
import { ArtsComponent } from './arts.component';
import { ArtComponent } from './art.component';
import { SpellsComponent } from './spells.component';
import { DescriptionComponent } from './description.component';


@NgModule({
  declarations: [
    MagicPageComponent,
    ArtsComponent,
    ArtComponent,
    SpellsComponent,
    DescriptionComponent,
    ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    SidebarModule,
  ],
  exports: [
    MagicPageComponent,
    ],
})
export class MagicPageModule { }
