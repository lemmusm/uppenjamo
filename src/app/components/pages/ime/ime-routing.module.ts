import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImeComponent } from './ime.component';

const routes: Routes = [
  {
    path: '',
    component: ImeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImeRoutingModule { }
