import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IbtComponent } from './ibt.component';

const routes: Routes = [
  {
    path: '',
    component: IbtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IbtRoutingModule {}
