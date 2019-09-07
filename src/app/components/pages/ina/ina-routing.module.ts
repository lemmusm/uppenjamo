import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InaComponent } from './ina.component';

const routes: Routes = [
  {
    path: '',
    component: InaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InaRoutingModule { }
