import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilosofiaInstitucionalComponent } from './filosofia-institucional.component';

const routes: Routes = [
  {
    path: '',
    component: FilosofiaInstitucionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilosofiaInstitucionalRoutingModule {}
