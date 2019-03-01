import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndRoutingModule } from './ind-routing.module';
import { IndComponent } from './ind.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [IndComponent],
  imports: [CommonModule, IndRoutingModule, MdbootstrapModule]
})
export class IndModule {}
