import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaComponent } from './ma.component';

const routes: Routes = [
  {
    path: '',
    component: MaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaRoutingModule { }
