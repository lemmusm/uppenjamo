import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IgualdadLaboralComponent } from './igualdad-laboral.component';

const routes: Routes = [
  {
    path: '',
    component: IgualdadLaboralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IgualdadLaboralRoutingModule {}
