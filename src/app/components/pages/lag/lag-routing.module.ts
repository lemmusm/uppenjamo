import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LagComponent } from './lag.component';

const routes: Routes = [
  {
    path: '',
    component: LagComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LagRoutingModule {}
