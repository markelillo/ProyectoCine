import { Component, OnInit } from '@angular/core';
import { PeliculasHttpService } from 'src/app/services/peliculas-http.service';


@Component({
  selector: 'app-cine-principal',
  templateUrl: './cine-principal.component.html',
  styleUrls: ['./cine-principal.component.css']
})
export class CinePrincipalComponent implements OnInit {
  constructor(
    private peliculasServ: PeliculasHttpService,
  ) {
  }
  ngOnInit(): void {
  }

}
