import {AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

@Component({
  selector: 'app-alumnos-borrados',
  templateUrl: './alumnos-borrados.component.html',
  styleUrls: ['./alumnos-borrados.component.css']
})
export class AlumnosBorradosComponent implements OnInit {

  displayedColumns: string[] = ['imagen', 'nombre', 'apellido', 'email','fecha'];
  public dataSource: MatTableDataSource<any>
  listaUsuarios:any;  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuariosService: UsuariosFirebaseService, private router: Router ) {
    
    this.usuariosService.getAllAlumnosBorrados().subscribe(listado =>{
        
      this.listaUsuarios=listado;
      // console.info(this.listaUsuarios);
      this.dataSource = new MatTableDataSource(this.listaUsuarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // Assign the data to the data source for the table to render
    
  }
  ngOnInit(){
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async habilitar(habilito: boolean, email: string){
    await this.usuariosService.obtenerID(email);
    let fecha;
    if(habilito){
      fecha = "";
    }else{
      fecha = new Date();
    }
    
    this.usuariosService.update(this.usuariosService.id, {disponible: habilito, fechaBorrado: fecha})
    
  }
  
  Navegar(ruta: string){
    this.router.navigate([ruta]);

  }

}
