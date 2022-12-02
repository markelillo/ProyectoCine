import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula';
import { PeliculasHttpService } from 'src/app/services/peliculas-http.service';


@Component({
  selector: 'app-proximos-estrenos',
  templateUrl: './proximos-estrenos.component.html',
  styleUrls: ['./proximos-estrenos.component.css']
})
export class ProximosEstrenosComponent implements OnInit {
  proximas: Pelicula[] = [];
  fecha = new Date();
  constructor(
    private peliculasServ: PeliculasHttpService,
  ) {
    peliculasServ.obtenerTodos().subscribe(
      (lista: Pelicula[]) => {
        lista.forEach(p => {
          if (new Date(p.estreno) > this.fecha) this.proximas.push(p)
        });
      }
    )
  }
  ngOnInit(): void {

  }

}
