import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { CharsheetComponent } from './charsheet/charsheet.component';

import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { CharheadComponent } from './charsheet/charhead.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CharsheetComponent,
    MessagesComponent,
    CharheadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,
    RouterModule.forRoot([
    {path: 'charsheet', component: CharsheetComponent},
    // {path: 'heroes-list', component: HeroesListComponent},
  ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
