import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { User } from 'src/app/clases/user';
import { MateriasFirebaseService } from 'src/app/services/materias-firebase.service';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

@Component({
  selector: 'app-materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.css']
})
export class MateriaDetalleComponent implements OnInit, OnChanges {

  @Input() materiaParaAsignar: Materia;
  @Output() eventAlumnoSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  usuario: User;
  cupoAlcanzado: boolean;
  email: string;
  cupoRestante: number;
  mostrar : boolean = true;
  inscripto : boolean = false;
  public role: string = localStorage.getItem('role');
  alumnosHabilitados = new Array<User>();

  constructor(private materiasServ: MateriasFirebaseService, private usuarioService: UsuariosFirebaseService) {
    this.email = localStorage.getItem('usuario');
    this.obtenerUsuarioLogueado();
    
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    if(this.materiaParaAsignar){
      if(this.materiaParaAsignar.listadoAlumnos){
        let listadoAlumnosBorrados;
        this.usuarioService.getAllAlumnosBorrados().subscribe(listado =>{        
          listadoAlumnosBorrados=listado;
          for (let index = 0; index < this.materiaParaAsignar.listadoAlumnos.length; index++) {
            let flagBorrado = false;
            for (let i = 0; i < listadoAlumnosBorrados.length; i++) {
              
              if(this.materiaParaAsignar.listadoAlumnos[index].email == listadoAlumnosBorrados[i].email){
                console.log("Entro en coincidencia con usuario borrado: " + this.materiaParaAsignar.listadoAlumnos[index].email)
                flagBorrado = true;
              }
              
            }
            if(!flagBorrado){
              this.alumnosHabilitados.push(this.materiaParaAsignar.listadoAlumnos[index])
            }            
          }
          this.cupoRestante = this.materiaParaAsignar.cupoAlumnos - this.alumnosHabilitados.length;
        });
        
        
      }else{
        this.cupoRestante = this.materiaParaAsignar.cupoAlumnos
      }      
    }    
  }

  
  async obtenerUsuarioLogueado(){
    await this.usuarioService.obtenerUsuario(this.email)
    this.usuario = this.usuarioService.usuarioSeleccionado;
  }

  async ConfirmarInscripcion(){
    await this.materiasServ.obtenerID(this.materiaParaAsignar.id);
    if(this.alumnosHabilitados){
      if(this.alumnosHabilitados.length < this.materiaParaAsignar.cupoAlumnos){
        for (let index = 0; index < this.alumnosHabilitados.length; index++) {
          if(this.alumnosHabilitados[index].email == this.usuario.email){
            this.inscripto = true;
            break;
          }                  
        }
        if(!this.inscripto){
          this.alumnosHabilitados.push(this.usuario);        
          this.materiasServ.update(this.materiasServ.idMateriaSeleccionada, {listadoAlumnos: this.alumnosHabilitados});
          this.mostrar = false;  
        }
        
        
      }else{
        this.cupoAlcanzado = true;
      }
      
    }else{
      this.materiaParaAsignar.listadoAlumnos = new Array<User>();
      this.materiaParaAsignar.listadoAlumnos.push(this.usuario);
    
      this.materiasServ.update(this.materiasServ.idMateriaSeleccionada, {listadoAlumnos: this.materiaParaAsignar.listadoAlumnos})
      this.mostrar = false;
    }
  }


  SeleccionarAlumno(alumno: User){
    this.eventAlumnoSeleccionado.emit(alumno);
  }

  

}
