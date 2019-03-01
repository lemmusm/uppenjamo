import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IswComponent } from './isw.component';

const routes: Routes = [
  {
    path: '',
    component: IswComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IswRoutingModule {}
