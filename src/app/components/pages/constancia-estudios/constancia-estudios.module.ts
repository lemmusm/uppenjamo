import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstanciaEstudiosRoutingModule } from './constancia-estudios-routing.module';
import { ContanciaEstudiosComponent } from './contancia-estudios.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [ContanciaEstudiosComponent],
  imports: [CommonModule, ConstanciaEstudiosRoutingModule, MdbootstrapModule]
})
export class ConstanciaEstudiosModule {}
