import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CambioTipoUserPipe } from '../pipes/cambio-tipo-user.pipe';
import { NotaTextoPipe } from '../pipes/nota-texto.pipe';

import { SharedModule } from '../shared/shared.module';
import { SeccionesRoutingModule } from './secciones-routing.module';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { PageCrearMateriaComponent } from './materia/page-crear-materia/page-crear-materia.component';
import { ListadoProfesoresComponent } from './listado-profesores/listado-profesores.component';
import { AltaMateriaComponent } from './materia/alta-materia/alta-materia.component';
import { PageInscripcionMateriaComponent } from './inscripcion/page-inscripcion-materia/page-inscripcion-materia.component';
import { ListadoAlumnosComponent } from './inscripcion/listado-alumnos/listado-alumnos.component';
import { ListadoMateriasComponent } from './inscripcion/listado-materias/listado-materias.component';
import { MateriaDetalleComponent } from './materia/materia-detalle/materia-detalle.component';
import { MisMateriasComponent } from './mis-materias/mis-materias.component';
import { PageMateriasProfeComponent } from './profesor/page-materias-profe/page-materias-profe.component';
import { CalificarAlumnoComponent } from './profesor/calificar-alumno/calificar-alumno.component';
import { ColorCupoAlumnosDirective } from '../directivas/color-cupo-alumnos.directive';
import { ColorSituacionAlumnoDirective } from '../directivas/color-situacion-alumno.directive';
import { AlumnosBorradosComponent } from './usuarios/alumnos-borrados/alumnos-borrados.component';
import { MisCalificacionesComponent } from './mis-materias/mis-calificaciones/mis-calificaciones.component';
import { PageExamenesComponent } from './profesor/examenes/page-examenes/page-examenes.component';
import { DatosExamenesComponent } from './profesor/examenes/datos-examenes/datos-examenes.component';
import { ActasExamenesComponent } from './profesor/page-actas-examenes/actas-examenes/actas-examenes.component';
import { PageActasExamenesComponent } from './profesor/page-actas-examenes/page-actas-examenes.component';
import { AprobacionDirectaComponent } from './profesor/page-actas-examenes/aprobacion-directa/aprobacion-directa.component';
import { AprobacionNODirectaComponent } from './profesor/page-actas-examenes/aprobacion-nodirecta/aprobacion-nodirecta.component';


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
    MateriaDetalleComponent,
    MisMateriasComponent,
    NotaTextoPipe,
    PageMateriasProfeComponent,
    CalificarAlumnoComponent,
    ColorCupoAlumnosDirective,
    ColorSituacionAlumnoDirective,
    AlumnosBorradosComponent,
    MisCalificacionesComponent,
    PageExamenesComponent,
    DatosExamenesComponent,
    ActasExamenesComponent,
    PageActasExamenesComponent,
    AprobacionDirectaComponent,
    AprobacionNODirectaComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule,
    SharedModule
  ]
})
export class SeccionesModule { }
