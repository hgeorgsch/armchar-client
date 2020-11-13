import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharsheetComponent } from './charsheet.component';

const routes: Routes = [
     { path: '', component: CharsheetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharsheetRoutingModule { }
