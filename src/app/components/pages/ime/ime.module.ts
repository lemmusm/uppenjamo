import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImeRoutingModule } from './ime-routing.module';
import { ImeComponent } from './ime.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';


@NgModule({
  declarations: [ImeComponent],
  imports: [
    CommonModule,
    ImeRoutingModule,
    MdbootstrapModule
  ]
})
export class ImeModule { }
