package com.curso.spring.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curso.spring.entidades.Pelicula;

public interface PeliculaJPARepository extends JpaRepository<Pelicula, Integer>{

}
