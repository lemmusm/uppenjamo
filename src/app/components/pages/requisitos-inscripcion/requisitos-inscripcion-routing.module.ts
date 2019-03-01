import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequisitosInscripcionComponent } from './requisitos-inscripcion.component';

const routes: Routes = [
  {
    path: '',
    component: RequisitosInscripcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitosInscripcionRoutingModule {}
