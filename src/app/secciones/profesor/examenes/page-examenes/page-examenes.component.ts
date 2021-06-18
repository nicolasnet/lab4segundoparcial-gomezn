import { Component, OnInit } from '@angular/core';
import { Examenes } from 'src/app/clases/examenes';
import { Materia } from 'src/app/clases/materia';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-page-examenes',
  templateUrl: './page-examenes.component.html',
  styleUrls: ['./page-examenes.component.css']
})
export class PageExamenesComponent implements OnInit {

  materiaSeleccionada: Materia;
  public role: string = localStorage.getItem('role');
  alumnoSeleccionado: User;
  examenIniciado: Examenes;

  constructor() { }

  ngOnInit(): void {
  }

  CargarMateriaElegida(materia: Materia){
    this.materiaSeleccionada = materia
  }

  CargarAlumnoElegido(alumno: User){
    this.alumnoSeleccionado = alumno
  }

  CargarDatos(examen: Examenes){
    this.examenIniciado = examen;
  }

}
