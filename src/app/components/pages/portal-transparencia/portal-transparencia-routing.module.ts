import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalTransparenciaComponent } from './portal-transparencia.component';

const routes: Routes = [
  {
    path: '',
    component: PortalTransparenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalTransparenciaRoutingModule {}
