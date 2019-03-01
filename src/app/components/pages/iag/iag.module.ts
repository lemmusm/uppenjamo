import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IagRoutingModule } from './iag-routing.module';
import { IagComponent } from './iag.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [IagComponent],
  imports: [CommonModule, IagRoutingModule, MdbootstrapModule]
})
export class IagModule {}
