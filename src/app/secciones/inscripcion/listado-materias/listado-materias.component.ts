import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MateriasFirebaseService } from 'src/app/services/materias-firebase.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent implements OnInit {

  listadoMaterias:any;
  cantidadMaterias: number;
  @Output() eventMateriaSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  mostrar: boolean = true;
  materiaElegida: Materia;

  constructor(private miServicio: MateriasFirebaseService) {
    this.miServicio.getAll().subscribe(resultado => {
      this.listadoMaterias = resultado;
      this.cantidadMaterias = this.listadoMaterias.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

  ngOnInit(): void {
  }

  seleccionMateria(materia:Materia){
    this.materiaElegida = materia;
    this.eventMateriaSeleccionado.emit(materia);
    this.mostrar = false;
    console.log(materia);
  }

}
