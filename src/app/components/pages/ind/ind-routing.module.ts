import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndComponent } from './ind.component';

const routes: Routes = [
  {
    path: '',
    component: IndComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndRoutingModule {}
