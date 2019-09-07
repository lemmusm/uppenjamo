import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaRoutingModule } from './ma-routing.module';
import { MaComponent } from './ma.component';

@NgModule({
  declarations: [MaComponent],
  imports: [
    CommonModule,
    MaRoutingModule
  ]
})
export class MaModule { }
