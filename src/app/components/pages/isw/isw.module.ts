import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IswRoutingModule } from './isw-routing.module';
import { IswComponent } from './isw.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [IswComponent],
  imports: [CommonModule, IswRoutingModule, MdbootstrapModule]
})
export class IswModule {}
