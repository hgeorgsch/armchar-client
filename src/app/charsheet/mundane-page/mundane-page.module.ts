import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';

import { AbilitiesComponent } from './abilities.component';
import { CharacteristicsComponent } from './characteristics.component';
import { PtraitComponent } from './ptrait.component';
import { ReputationComponent } from './reputation.component';
import { VfComponent } from './vf.component';
import { EffectTraitComponent } from './effect-trait.component';
import { ScoreComponent } from './score.component';
import { MundanePageComponent } from './mundane-page.component';
import { AbilityDescriptionComponent } from './ability-description.component';


@NgModule({
  declarations: [
    AbilitiesComponent,
    CharacteristicsComponent,
    PtraitComponent,
    ReputationComponent,
    VfComponent,
    EffectTraitComponent,
    ScoreComponent,
    MundanePageComponent,
    AbilityDescriptionComponent,
  ],
  imports: [
    CommonModule,
    PanelModule,
    TableModule,
    TabViewModule,
    CardModule,
    SidebarModule,
  ],
  exports: [
    MundanePageComponent,
    ],
})
export class MundanePageModule { }
