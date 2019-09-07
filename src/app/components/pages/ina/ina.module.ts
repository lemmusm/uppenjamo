import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InaRoutingModule } from './ina-routing.module';
import { InaComponent } from './ina.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [InaComponent],
  imports: [
    CommonModule,
    InaRoutingModule,
    MdbootstrapModule
  ]
})
export class InaModule { }
