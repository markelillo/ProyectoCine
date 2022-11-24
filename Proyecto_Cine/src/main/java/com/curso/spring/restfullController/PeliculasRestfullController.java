package com.curso.spring.restfullController;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.curso.spring.entidades.Pelicula;
import com.curso.spring.servicios.PeliculasService;

@RestController
@CrossOrigin(origins = { "http://localhost:4200" } , 
methods = {RequestMethod.GET,
		RequestMethod.POST, 
		RequestMethod.DELETE, 
		RequestMethod.PUT,
		RequestMethod.OPTIONS
})//permitir que puedas acceder desde el servidor 8080 al 4200
public class PeliculasRestfullController {
	
	@Autowired
	private PeliculasService peliculaService;
	
	
	@GetMapping("/ws/peliculas")
	public Collection<Pelicula> all() {
		return peliculaService.gelAllPeliculas();
	}

}
