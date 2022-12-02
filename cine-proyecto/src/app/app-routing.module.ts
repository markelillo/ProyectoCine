import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './componentes/cartelera/cartelera.component';
import { ProximosEstrenosComponent } from './componentes/proximos-estrenos/proximos-estrenos.component';


const routes: Routes = [
  { path: '', component: CarteleraComponent },
  { path: 'proximo', component: ProximosEstrenosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
