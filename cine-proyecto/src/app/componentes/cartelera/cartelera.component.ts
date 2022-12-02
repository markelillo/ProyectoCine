import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula';
import { PeliculasHttpService } from 'src/app/services/peliculas-http.service';


@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  peliculas: Pelicula[] = [];

  fecha = new Date();
  constructor(
    private peliculasServ: PeliculasHttpService,
  ) {
    peliculasServ.obtenerTodos().subscribe(
      (lista: Pelicula[]) => {
        lista.forEach(p => {
          if (new Date(p.estreno) < this.fecha) this.peliculas.push(p)
        });
      }
    )
  }
  ngOnInit(): void {
  }

}
