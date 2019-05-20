import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import mdbootstrapmodule
import { MdbootstrapModule } from './mdbootstrap.module';
// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { SlideComponent } from './components/shared/slide/slide.component';
import { CarrerasComponent } from './components/shared/carreras/carreras.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    SlideComponent,
    CarrerasComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    MdbootstrapModule,
    NgbModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class AppModule {}
