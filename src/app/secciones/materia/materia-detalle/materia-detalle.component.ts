import { Component, Input, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';

@Component({
  selector: 'app-materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.css']
})
export class MateriaDetalleComponent implements OnInit {

  @Input() materiaParaAsignar: Materia;

  constructor() { }

  ngOnInit(): void {
  }

}
