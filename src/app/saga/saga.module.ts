import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';

import { SagaRoutingModule } from './saga-routing.module';
import { SagaComponent } from './saga.component';


@NgModule({
  declarations: [SagaComponent],
  imports: [
    CommonModule,
    TableModule,
    SagaRoutingModule
  ]
})
export class SagaModule { }
