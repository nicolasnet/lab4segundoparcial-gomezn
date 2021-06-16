import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-page-materias-profe',
  templateUrl: './page-materias-profe.component.html',
  styleUrls: ['./page-materias-profe.component.css']
})
export class PageMateriasProfeComponent implements OnInit {

  materiaSeleccionada: Materia;
  public role: string = localStorage.getItem('role');
  alumnoSeleccionado: User;

  constructor() { }

  ngOnInit(): void {
  }

  CargarMateriaElegida(materia: Materia){
    this.materiaSeleccionada = materia
  }

  CargarAlumnoElegido(alumno: User){
    this.alumnoSeleccionado = alumno
  }

}
