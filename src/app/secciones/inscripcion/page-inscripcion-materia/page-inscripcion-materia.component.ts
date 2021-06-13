import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';

@Component({
  selector: 'app-page-inscripcion-materia',
  templateUrl: './page-inscripcion-materia.component.html',
  styleUrls: ['./page-inscripcion-materia.component.css']
})
export class PageInscripcionMateriaComponent implements OnInit {
  
  materiaSeleccionada: Materia;
  public role: string = localStorage.getItem('role');

  constructor() { }

  ngOnInit(): void {
  }

  CargarMateriaElegida(materia: Materia){
    this.materiaSeleccionada = materia
  }

}
