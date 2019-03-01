import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquidadGeneroRoutingModule } from './equidad-genero-routing.module';
import { EquidadGeneroComponent } from './equidad-genero.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [EquidadGeneroComponent],
  imports: [CommonModule, EquidadGeneroRoutingModule, MdbootstrapModule]
})
export class EquidadGeneroModule {}
