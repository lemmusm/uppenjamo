import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContanciaEstudiosComponent } from './contancia-estudios.component';

const routes: Routes = [
  {
    path: '',
    component: ContanciaEstudiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstanciaEstudiosRoutingModule {}
