package com.curso.spring.servicios;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.curso.spring.entidades.Pelicula;
import com.curso.spring.repositorio.PeliculaJPARepository;


@Service
@Transactional(propagation = Propagation.REQUIRED)
public class PeliculasServiceImp implements PeliculasService{

	@Autowired
	private PeliculaJPARepository repoJPAP;
	
	@Override
	public Collection<Pelicula> gelAllPeliculas() {
		// TODO Auto-generated method stub
		return repoJPAP.findAll();
	}

}
