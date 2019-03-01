import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoriosRoutingModule } from './laboratorios-routing.module';
import { LaboratoriosComponent } from './laboratorios.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [LaboratoriosComponent],
  imports: [CommonModule, LaboratoriosRoutingModule, MdbootstrapModule]
})
export class LaboratoriosModule {}
