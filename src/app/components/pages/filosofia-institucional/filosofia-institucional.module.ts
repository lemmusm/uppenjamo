import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilosofiaInstitucionalRoutingModule } from './filosofia-institucional-routing.module';
import { FilosofiaInstitucionalComponent } from './filosofia-institucional.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [FilosofiaInstitucionalComponent],
  imports: [
    CommonModule,
    FilosofiaInstitucionalRoutingModule,
    MdbootstrapModule
  ]
})
export class FilosofiaInstitucionalModule {}
