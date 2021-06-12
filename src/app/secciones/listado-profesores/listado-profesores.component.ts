import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent implements OnInit {

 
  listadoProfesores:any;
  cantidadProfesores: number;
  @Output() eventProfesorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private miServicio: UsuariosFirebaseService) {
    this.miServicio.getAllProfesores().subscribe(resultado => {
      this.listadoProfesores = resultado;
      this.cantidadProfesores = this.listadoProfesores.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

  ngOnInit(): void {
  }

  seleccionProfesor(profe:object){
    // this.traerDatos();
    this.eventProfesorSeleccionado.emit(profe);
    console.log(profe);
  }
}
