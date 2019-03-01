import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IltComponent } from './ilt.component';

const routes: Routes = [
  {
    path: '',
    component: IltComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IltRoutingModule {}
