import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calificacion } from 'src/app/clases/calificacion';
import { Materia } from 'src/app/clases/materia';
import { CalificacionesFirebaseService } from 'src/app/services/calificaciones-firebase.service';
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
  listadoCalificaciones: any[];
  listadoCalificacionesDelALumno = new Array<Calificacion>();
  email: string;
  alumno: any;
  mostrar = true;
  cantidadCalificaciones: number;

  constructor(private miServicio: MateriasFirebaseService, private usuarioService: UsuariosFirebaseService, private router: Router, private calificacionesServ: CalificacionesFirebaseService) {
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

    this.calificacionesServ.getAll().subscribe(resultado => {
      this.listadoCalificaciones = resultado;
      console.log(this.listadoCalificaciones)
      for (let index = 0; index < this.listadoCalificaciones.length; index++) {        
        if(this.listadoCalificaciones[index].alumno.email == this.alumno.email){          
          this.listadoCalificacionesDelALumno.push(this.listadoCalificaciones[index]);
        }
        
      }
      this.cantidadCalificaciones = this.listadoCalificacionesDelALumno.length;
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

  Navegar(ruta: string){
    this.router.navigate([ruta]);
  }

  Cambio(){
    this.mostrar = !this.mostrar;
  }

}
