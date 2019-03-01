import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliotecaDigitalComponent } from './biblioteca-digital.component';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaDigitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaDigitalRoutingModule {}
