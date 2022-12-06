import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CinePrincipalComponent } from './componentes/cine-principal/cine-principal.component';
import { ProximosEstrenosComponent } from './componentes/proximos-estrenos/proximos-estrenos.component';
import { CarteleraComponent } from './componentes/cartelera/cartelera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListaCinesComponent } from './lista-cines/lista-cines.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CinePrincipalComponent,
    ProximosEstrenosComponent,
    CarteleraComponent,
    ListaCinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
