import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import mdbootstrapmodule
import { MdbootstrapModule } from './mdbootstrap.module';
// AngularGoogleMaps
import { AgmCoreModule } from '@agm/core';
// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { SlideComponent } from './components/shared/slide/slide.component';
import { CarrerasComponent } from './components/shared/carreras/carreras.component';
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
import { IbtComponent } from './components/pages/ibt/ibt.component';
import { IndComponent } from './components/pages/ind/ind.component';
import { PortalTransparenciaComponent } from './components/pages/portal-transparencia/portal-transparencia.component';
import { HorariosGrupoComponent } from './components/pages/horarios-grupo/horarios-grupo.component';
import { RequisitosInscripcionComponent } from './components/pages/requisitos-inscripcion/requisitos-inscripcion.component';
import { ContanciaEstudiosComponent } from './components/pages/contancia-estudios/contancia-estudios.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    SlideComponent,
    CarrerasComponent,
    FilosofiaInstitucionalComponent,
    NormatecaComponent,
    BecasComponent,
    EquidadGeneroComponent,
    IgualdadLaboralComponent,
    BibliotecaDigitalComponent,
    LaboratoriosComponent,
    IltComponent,
    IswComponent,
    LagComponent,
    IagComponent,
    IbtComponent,
    IndComponent,
    PortalTransparenciaComponent,
    HorariosGrupoComponent,
    RequisitosInscripcionComponent,
    ContanciaEstudiosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbootstrapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9oIqArqOp5NP4_EMNqWkQcQUukVvY0qE'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
