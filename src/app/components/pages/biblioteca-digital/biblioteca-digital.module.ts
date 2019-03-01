import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaDigitalRoutingModule } from './biblioteca-digital-routing.module';
import { BibliotecaDigitalComponent } from './biblioteca-digital.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';

@NgModule({
  declarations: [BibliotecaDigitalComponent],
  imports: [CommonModule, BibliotecaDigitalRoutingModule, MdbootstrapModule]
})
export class BibliotecaDigitalModule {}
