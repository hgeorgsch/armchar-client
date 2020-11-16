import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SagaComponent } from './saga.component';

const routes: Routes = [
     { path: '', component: SagaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SagaRoutingModule { }
