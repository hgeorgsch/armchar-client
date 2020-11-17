import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations' ;
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {CardModule} from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { PageAdvancementsComponent } from './page-advancements.component';
import { AdvancementModule } from './advancement/advancement.module';



import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MessagesComponent,
    TopbarComponent, 
    PageAdvancementsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule, 
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    // AppRoutingModule,
    AdvancementModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'charsheet', pathMatch: 'full'  },
    { path: 'charsheet', loadChildren: 
      () => import('./charsheet/charsheet.module').then( m => m.CharsheetModule ) },
    { path: 'adv', component: PageAdvancementsComponent },
    { path: 'saga', loadChildren: 
      () => import('./saga/saga.module').then( m => m.SagaModule ) }
], { relativeLinkResolution: 'legacy' }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
