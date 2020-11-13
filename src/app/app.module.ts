import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';


import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MessagesComponent,
    // CharsheetComponent,
    // CharheadComponent,
    // AbilitiesComponent,
    // CharacteristicsComponent,
    // PtraitComponent,
    // ReputationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    // AppRoutingModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'charsheet', pathMatch: 'full'  },
    { path: 'charsheet', loadChildren: 
      () => import('./charsheet/charsheet.module').then( m => m.CharsheetModule ) }
], { relativeLinkResolution: 'legacy' }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
