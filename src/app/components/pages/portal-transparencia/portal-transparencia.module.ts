import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalTransparenciaRoutingModule } from './portal-transparencia-routing.module';
import { PortalTransparenciaComponent } from './portal-transparencia.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [PortalTransparenciaComponent],
  imports: [CommonModule, PortalTransparenciaRoutingModule, MdbootstrapModule]
})
export class PortalTransparenciaModule {}
