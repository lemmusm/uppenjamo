import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IagComponent } from './iag.component';

const routes: Routes = [
  {
    path: '',
    component: IagComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IagRoutingModule {}
