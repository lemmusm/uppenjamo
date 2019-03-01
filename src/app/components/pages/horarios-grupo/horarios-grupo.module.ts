import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosGrupoRoutingModule } from './horarios-grupo-routing.module';
import { HorariosGrupoComponent } from './horarios-grupo.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [HorariosGrupoComponent],
  imports: [CommonModule, HorariosGrupoRoutingModule, MdbootstrapModule]
})
export class HorariosGrupoModule {}
