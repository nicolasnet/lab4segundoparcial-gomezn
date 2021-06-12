import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { PageCrearMateriaComponent } from './materia/page-crear-materia/page-crear-materia.component';
import { ListadoProfesoresComponent } from './listado-profesores/listado-profesores.component';
import { AltaMateriaComponent } from './materia/alta-materia/alta-materia.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    PageCrearMateriaComponent,
    ListadoProfesoresComponent,
    AltaMateriaComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule,
    SharedModule
  ]
})
export class SeccionesModule { }
