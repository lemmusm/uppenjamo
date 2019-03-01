import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgualdadLaboralRoutingModule } from './igualdad-laboral-routing.module';
import { IgualdadLaboralComponent } from './igualdad-laboral.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [IgualdadLaboralComponent],
  imports: [CommonModule, IgualdadLaboralRoutingModule, MdbootstrapModule]
})
export class IgualdadLaboralModule {}
