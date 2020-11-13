import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { CharsheetComponent } from './charsheet/charsheet.component';

import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { CharheadComponent } from './charsheet/charhead.component';
import { AbilitiesComponent } from './charsheet/abilities.component';
import { AbilityComponent } from './charsheet/ability.component';
import { CharacteristicsComponent } from './charsheet/characteristics.component';
import { CharacteristicComponent } from './charsheet/characteristic.component';

import {PanelModule} from 'primeng/panel';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CharsheetComponent,
    MessagesComponent,
    CharheadComponent,
    AbilitiesComponent,
    AbilityComponent,
    CharacteristicsComponent,
    CharacteristicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PanelModule,
    NoopAnimationsModule,
    // AppRoutingModule,
    // AppRoutingModule,
RouterModule.forRoot([
    { path: '', component: CharsheetComponent },
    { path: 'charsheet', component: CharsheetComponent },
], { relativeLinkResolution: 'legacy' }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
