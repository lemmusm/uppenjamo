import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LagRoutingModule } from './lag-routing.module';
import { LagComponent } from './lag.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [LagComponent],
  imports: [CommonModule, LagRoutingModule, MdbootstrapModule]
})
export class LagModule {}
