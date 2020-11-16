import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SagaRoutingModule } from './saga-routing.module';
import { SagaComponent } from './saga.component';


@NgModule({
  declarations: [SagaComponent],
  imports: [
    CommonModule,
    SagaRoutingModule
  ]
})
export class SagaModule { }
