import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BecasRoutingModule } from './becas-routing.module';
import { BecasComponent } from './becas.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [BecasComponent],
  imports: [CommonModule, BecasRoutingModule, MdbootstrapModule]
})
export class BecasModule {}
