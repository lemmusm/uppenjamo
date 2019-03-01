import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IbtRoutingModule } from './ibt-routing.module';
import { IbtComponent } from './ibt.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [IbtComponent],
  imports: [CommonModule, IbtRoutingModule, MdbootstrapModule]
})
export class IbtModule {}
