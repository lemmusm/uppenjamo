import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'filosofia-institucional',
    loadChildren:
      './components/pages/filosofia-institucional/filosofia-institucional.module#FilosofiaInstitucionalModule'
  },
  {
    path: 'normateca',
    loadChildren:
      './components/pages/normateca/normateca.module#NormatecaModule'
  },
  {
    path: 'becas',
    loadChildren: './components/pages/becas/becas.module#BecasModule'
  },
  {
    path: 'biblioteca-digital',
    loadChildren:
      './components/pages/biblioteca-digital/biblioteca-digital.module#BibliotecaDigitalModule'
  },
  {
    path: 'equidad-genero',
    loadChildren:
      './components/pages/equidad-genero/equidad-genero.module#EquidadGeneroModule'
  },
  {
    path: 'igualdad-laboral',
    loadChildren:
      './components/pages/igualdad-laboral/igualdad-laboral.module#IgualdadLaboralModule'
  },
  {
    path: 'laboratorios',
    loadChildren:
      './components/pages/laboratorios/laboratorios.module#LaboratoriosModule'
  },
  {
    path: 'ilt',
    loadChildren: './components/pages/ilt/ilt.module#IltModule'
  },
  {
    path: 'isw',
    loadChildren: './components/pages/isw/isw.module#IswModule'
  },
  {
    path: 'lag',
    loadChildren: './components/pages/lag/lag.module#LagModule'
  },
  {
    path: 'iag',
    loadChildren: './components/pages/iag/iag.module#IagModule'
  },
  {
    path: 'ibt',
    loadChildren: './components/pages/ibt/ibt.module#IbtModule'
  },
  {
    path: 'ind',
    loadChildren: './components/pages/ind/ind.module#IndModule'
  },
  {
    path: 'portal-transparencia',
    loadChildren:
      './components/pages/portal-transparencia/portal-transparencia.module#PortalTransparenciaModule'
  },
  {
    path: 'horarios',
    loadChildren:
      './components/pages/horarios-grupo/horarios-grupo.module#HorariosGrupoModule'
  },
  {
    path: 'requisitos_inscripcion',
    loadChildren:
      './components/pages/requisitos-inscripcion/requisitos-inscripcion.module#RequisitosInscripcionModule'
  },
  {
    path: 'contancia_estudios',
    loadChildren:
      './components/pages/constancia-estudios/constancia-estudios.module#ConstanciaEstudiosModule'
  },
  {
    path: 'contacto',
    loadChildren: './components/pages/contacto/contacto.module#ContactoModule'
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
