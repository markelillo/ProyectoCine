import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../modelo/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasHttpService {
  private urlBase: string = 'http://localhost:8080/ws';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {

  }
  /**
   * obtenerTodos
   */
  public obtenerTodos(): Observable<Pelicula[]> {
    //en<> dices que tipo de dato te va a devolver
    const url = this.urlBase + '/peliculas';
    console.log(url);
    return this.http.get<Pelicula[]>(url, this.httpOptions);

  }
}
