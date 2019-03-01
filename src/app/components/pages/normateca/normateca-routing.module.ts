import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormatecaComponent } from './normateca.component';

const routes: Routes = [
  {
    path: '',
    component: NormatecaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormatecaRoutingModule {}
