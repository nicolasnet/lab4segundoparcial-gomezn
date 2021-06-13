import { Component, Input, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { User } from 'src/app/clases/user';
import { MateriasFirebaseService } from 'src/app/services/materias-firebase.service';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  @Input() materiaParaAsignar: Materia;
  listadoAlumnos:any;
  cantidadAlumnos: number;
  cupoAlcanzado: boolean = false;

  constructor(private usuariosServ: UsuariosFirebaseService, private materiasServ: MateriasFirebaseService) {
    this.usuariosServ.getAllAlumnos().subscribe(resultado => {
      this.listadoAlumnos = resultado;
      this.cantidadAlumnos = this.listadoAlumnos.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

   ngOnInit(): void {
  }


  async asignarAlumno(alumno: User){
    if(this.materiaParaAsignar.listadoAlumnos){
      if(this.materiaParaAsignar.listadoAlumnos.length < this.materiaParaAsignar.cupoAlumnos){
        this.materiaParaAsignar.listadoAlumnos.push(alumno);
        await this.materiasServ.obtenerID(this.materiaParaAsignar.nombre)
        this.materiasServ.update(this.materiasServ.idMateriaSeleccionada, {listadoAlumnos: this.materiaParaAsignar.listadoAlumnos})
      }else{
        this.cupoAlcanzado = true;
      }
      
    }else{
      this.materiaParaAsignar.listadoAlumnos = new Array<User>();
      this.materiaParaAsignar.listadoAlumnos.push(alumno);
      await this.materiasServ.obtenerID(this.materiaParaAsignar.nombre)
      this.materiasServ.update(this.materiasServ.idMateriaSeleccionada, {listadoAlumnos: this.materiaParaAsignar.listadoAlumnos})
    }
        
  }

}
