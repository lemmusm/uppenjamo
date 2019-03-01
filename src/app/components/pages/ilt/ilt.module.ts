import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IltRoutingModule } from './ilt-routing.module';
import { IltComponent } from './ilt.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [IltComponent],
  imports: [CommonModule, IltRoutingModule, MdbootstrapModule]
})
export class IltModule {}
