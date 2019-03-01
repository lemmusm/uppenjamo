import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorariosGrupoComponent } from './horarios-grupo.component';

const routes: Routes = [
  {
    path: '',
    component: HorariosGrupoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosGrupoRoutingModule {}
