import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquidadGeneroComponent } from './equidad-genero.component';

const routes: Routes = [
  {
    path: '',
    component: EquidadGeneroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquidadGeneroRoutingModule {}
