import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-crear-materia',
  templateUrl: './page-crear-materia.component.html',
  styleUrls: ['./page-crear-materia.component.css']
})
export class PageCrearMateriaComponent implements OnInit {
  
  profesorSeleccionado: object;
  public role: string = localStorage.getItem('role');

  constructor() { }

  ngOnInit(): void {
  }

  CargarProfesorSeleccionado(profesor: object){
    this.profesorSeleccionado = profesor;
  }

}
