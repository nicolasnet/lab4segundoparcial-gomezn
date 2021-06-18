import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calificacion } from 'src/app/clases/calificacion';
import { Materia } from 'src/app/clases/materia';
import { CalificacionesFirebaseService } from 'src/app/services/calificaciones-firebase.service';
import { MateriasFirebaseService } from 'src/app/services/materias-firebase.service';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

@Component({
  selector: 'app-aprobacion-directa',
  templateUrl: './aprobacion-directa.component.html',
  styleUrls: ['./aprobacion-directa.component.css']
})
export class AprobacionDirectaComponent implements OnInit {

  @Input() materiaParaAsignar: Materia;
  listadoCalificaciones: any[];
  listadoCalificacionesDelALumno = new Array<Calificacion>();
  cantidadCalificaciones: number;

  constructor(private miServicio: MateriasFirebaseService, private usuarioService: UsuariosFirebaseService, private router: Router, private calificacionesServ: CalificacionesFirebaseService) {
    this.calificacionesServ.getAll().subscribe(resultado => {
      this.listadoCalificaciones = resultado;
      console.log(this.listadoCalificaciones)
      for (let index = 0; index < this.listadoCalificaciones.length; index++) {        
        if(this.listadoCalificaciones[index].nota >= 7 ){
         
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

  ngOnChanges(){
    if(this.materiaParaAsignar){
      this.listadoCalificacionesDelALumno = new Array<Calificacion>();
      for (let index = 0; index < this.listadoCalificaciones.length; index++) {        
        if(this.listadoCalificaciones[index].nota >= 7 ){
          if(this.listadoCalificaciones[index].materia.id == this.materiaParaAsignar.id){
            this.listadoCalificacionesDelALumno.push(this.listadoCalificaciones[index]);
          }
                   
          
        }
        
      }
      this.cantidadCalificaciones = this.listadoCalificacionesDelALumno.length;

      // if(this.materiaParaAsignar.listadoAlumnos){
      //   let listadoAlumnosBorrados;
      //   this.usuarioService.getAllAlumnosBorrados().subscribe(listado =>{        
      //     listadoAlumnosBorrados=listado;
      //     for (let index = 0; index < this.materiaParaAsignar.listadoAlumnos.length; index++) {
      //       let flagBorrado = false;
      //       for (let i = 0; i < listadoAlumnosBorrados.length; i++) {
              
      //         if(this.materiaParaAsignar.listadoAlumnos[index].email == listadoAlumnosBorrados[i].email){
      //           console.log("Entro en coincidencia con usuario borrado: " + this.materiaParaAsignar.listadoAlumnos[index].email)
      //           flagBorrado = true;
      //         }
              
      //       }
      //       if(!flagBorrado){
      //         this.alumnosHabilitados.push(this.materiaParaAsignar.listadoAlumnos[index])
      //       }            
      //     }
      //     this.cupoRestante = this.materiaParaAsignar.cupoAlumnos - this.alumnosHabilitados.length;
      //   });
        
        
      // }else{
      //   this.cupoRestante = this.materiaParaAsignar.cupoAlumnos
      // }      
    }    
  }

}
