import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MateriasFirebaseService } from 'src/app/services/materias-firebase.service';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

@Component({
  selector: 'app-mis-materias',
  templateUrl: './mis-materias.component.html',
  styleUrls: ['./mis-materias.component.css']
})
export class MisMateriasComponent implements OnInit {
  listadoMaterias: any[];
  cantidadMaterias: number;
  listadoMateriasDelALumno = new Array<Materia>();
  email: string;
  alumno: any;

  constructor(private miServicio: MateriasFirebaseService, private usuarioService: UsuariosFirebaseService) {
    this.email = localStorage.getItem('usuario');
    this.obtenerUsuarioLogueado();
    this.miServicio.getAll().subscribe(resultado => {
      this.listadoMaterias = resultado;
      for (let index = 0; index < this.listadoMaterias.length; index++) {        
        if(this.listadoMaterias[index].listadoAlumnos){
          for (let i = 0; i < this.listadoMaterias[index].listadoAlumnos.length; i++) {
            if(this.listadoMaterias[index].listadoAlumnos[i].email == this.alumno.email){
              this.listadoMateriasDelALumno.push(this.listadoMaterias[index]);
            }
            
          }
        }
        
      }
      this.cantidadMaterias = this.listadoMateriasDelALumno.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

  ngOnInit(): void {
  }

  async obtenerUsuarioLogueado(){
    await this.usuarioService.obtenerUsuario(this.email)
    this.alumno = this.usuarioService.usuarioSeleccionado;
  }

}
