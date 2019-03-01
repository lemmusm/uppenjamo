import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BecasComponent } from './becas.component';

const routes: Routes = [
  {
    path: '',
    component: BecasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecasRoutingModule {}
