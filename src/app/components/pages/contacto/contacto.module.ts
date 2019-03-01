import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { MdbootstrapModule } from 'src/app/mdbootstrap.module';
// AngularGoogleMaps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    MdbootstrapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9oIqArqOp5NP4_EMNqWkQcQUukVvY0qE'
    })
  ]
})
export class ContactoModule {}
