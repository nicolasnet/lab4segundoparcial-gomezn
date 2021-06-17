import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MateriasFirebaseService } from 'src/app/services/materias-firebase.service';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

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
  public role: string = localStorage.getItem('role');
  email: string;
  profesor: any;
  listadoMateriasProfe: Materia[];

  constructor(private miServicio: MateriasFirebaseService, private usuarioService: UsuariosFirebaseService) {
    this.miServicio.getAll().subscribe(resultado => {
      this.listadoMaterias = resultado;
      this.cantidadMaterias = this.listadoMaterias.length;

      if(this.role == "profesor"){
        this.email = localStorage.getItem('usuario');
        this.listadoMateriasProfe = new Array<Materia>();
        for (let index = 0; index < this.listadoMaterias.length; index++) {
          if(this.listadoMaterias[index].profesor.email == this.email ){
            
            this.listadoMateriasProfe.push(this.listadoMaterias[index]);            
          }          
        }
      }
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

  async obtenerUsuarioLogueado(){
    await this.usuarioService.obtenerUsuario(this.email)
    this.profesor = this.usuarioService.usuarioSeleccionado;
  }

}
