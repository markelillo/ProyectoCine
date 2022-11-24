package com.curso.spring.entidades;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Peliculas")
public class Pelicula {
	@Id
	// @GeneratedValue(strategy=GenerationType.AUTO)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PELI_SEQ")
	@SequenceGenerator(sequenceName = "SUMA_ID_PELICULAS", name = "PELI_SEQ", allocationSize = 1)
	private Integer id;
	@Column(name = "NOMBRE")
	@NotNull
	private String nombre;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ESTRENO")
	private Date estreno;
	@Column(name = "SINOPSIS")
	private String sinopsis;

	public Pelicula() {
		super();
	}

	public Pelicula(Integer id, String nombre, Date estreno, String sinopsis) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.estreno = estreno;
		this.sinopsis = sinopsis;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Date getEstreno() {
		return estreno;
	}

	public void setEstreno(Date estreno) {
		this.estreno = estreno;
	}

	public String getSinopsis() {
		return sinopsis;
	}

	public void setSinopsis(String sinopsis) {
		this.sinopsis = sinopsis;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pelicula other = (Pelicula) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Pelicula [nombre=" + nombre + ", estreno=" + estreno + ", sinopsis=" + sinopsis + "]";
	}
	
	

}
