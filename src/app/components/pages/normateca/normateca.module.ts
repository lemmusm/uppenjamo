import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormatecaRoutingModule } from './normateca-routing.module';
import { NormatecaComponent } from './normateca.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [NormatecaComponent],
  imports: [CommonModule, NormatecaRoutingModule, MdbootstrapModule]
})
export class NormatecaModule {}
