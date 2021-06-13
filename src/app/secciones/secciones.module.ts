import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { PageCrearMateriaComponent } from './materia/page-crear-materia/page-crear-materia.component';
import { ListadoProfesoresComponent } from './listado-profesores/listado-profesores.component';
import { AltaMateriaComponent } from './materia/alta-materia/alta-materia.component';
import { PageInscripcionMateriaComponent } from './inscripcion/page-inscripcion-materia/page-inscripcion-materia.component';
import { ListadoAlumnosComponent } from './inscripcion/listado-alumnos/listado-alumnos.component';
import { ListadoMateriasComponent } from './inscripcion/listado-materias/listado-materias.component';

import { CambioTipoUserPipe } from '../pipes/cambio-tipo-user.pipe';
import { MateriaDetalleComponent } from './materia/materia-detalle/materia-detalle.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    PageCrearMateriaComponent,
    ListadoProfesoresComponent,
    AltaMateriaComponent,
    PageInscripcionMateriaComponent,
    ListadoAlumnosComponent,
    ListadoMateriasComponent,
    CambioTipoUserPipe,
    MateriaDetalleComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule,
    SharedModule
  ]
})
export class SeccionesModule { }
