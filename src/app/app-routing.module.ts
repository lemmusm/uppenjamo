import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { FilosofiaInstitucionalComponent } from './components/pages/filosofia-institucional/filosofia-institucional.component';
import { NormatecaComponent } from './components/pages/normateca/normateca.component';
import { BecasComponent } from './components/pages/becas/becas.component';
import { EquidadGeneroComponent } from './components/pages/equidad-genero/equidad-genero.component';
import { IgualdadLaboralComponent } from './components/pages/igualdad-laboral/igualdad-laboral.component';
import { BibliotecaDigitalComponent } from './components/pages/biblioteca-digital/biblioteca-digital.component';
import { LaboratoriosComponent } from './components/pages/laboratorios/laboratorios.component';
import { IltComponent } from './components/pages/ilt/ilt.component';
import { IswComponent } from './components/pages/isw/isw.component';
import { LagComponent } from './components/pages/lag/lag.component';
import { IagComponent } from './components/pages/iag/iag.component';
import { IndComponent } from './components/pages/ind/ind.component';
import { IbtComponent } from './components/pages/ibt/ibt.component';
import { PortalTransparenciaComponent } from './components/pages/portal-transparencia/portal-transparencia.component';
import { HorariosGrupoComponent } from './components/pages/horarios-grupo/horarios-grupo.component';
import { RequisitosInscripcionComponent } from './components/pages/requisitos-inscripcion/requisitos-inscripcion.component';
import { ContanciaEstudiosComponent } from './components/pages/contancia-estudios/contancia-estudios.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'filosofia-institucional',
    component: FilosofiaInstitucionalComponent
  },
  {
    path: 'normateca',
    component: NormatecaComponent
  },
  {
    path: 'becas',
    component: BecasComponent
  },
  {
    path: 'biblioteca-digital',
    component: BibliotecaDigitalComponent
  },
  {
    path: 'equidad-genero',
    component: EquidadGeneroComponent
  },
  {
    path: 'igualdad-laboral',
    component: IgualdadLaboralComponent
  },
  {
    path: 'laboratorios',
    component: LaboratoriosComponent
  },
  {
    path: 'ilt',
    component: IltComponent
  },
  {
    path: 'isw',
    component: IswComponent
  },
  {
    path: 'lag',
    component: LagComponent
  },
  {
    path: 'iag',
    component: IagComponent
  },
  {
    path: 'ibt',
    component: IbtComponent
  },
  {
    path: 'ind',
    component: IndComponent
  },
  {
    path: 'portal-transparencia',
    component: PortalTransparenciaComponent
  },
  {
    path: 'horarios',
    component: HorariosGrupoComponent
  },
  {
    path: 'requisitos_inscripcion',
    component: RequisitosInscripcionComponent
  },
  {
    path: 'contancia_estudios',
    component: ContanciaEstudiosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
