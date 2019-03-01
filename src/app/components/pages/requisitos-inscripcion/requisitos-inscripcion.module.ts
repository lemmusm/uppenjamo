import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisitosInscripcionRoutingModule } from './requisitos-inscripcion-routing.module';
import { RequisitosInscripcionComponent } from './requisitos-inscripcion.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [RequisitosInscripcionComponent],
  imports: [CommonModule, RequisitosInscripcionRoutingModule, MdbootstrapModule]
})
export class RequisitosInscripcionModule {}
