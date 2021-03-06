import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { PageInscripcionMateriaComponent } from './inscripcion/page-inscripcion-materia/page-inscripcion-materia.component';
import { PageCrearMateriaComponent } from './materia/page-crear-materia/page-crear-materia.component';
import { MisCalificacionesComponent } from './mis-materias/mis-calificaciones/mis-calificaciones.component';
import { MisMateriasComponent } from './mis-materias/mis-materias.component';
import { PageExamenesComponent } from './profesor/examenes/page-examenes/page-examenes.component';
import { PageActasExamenesComponent } from './profesor/page-actas-examenes/page-actas-examenes.component';
import { PageMateriasProfeComponent } from './profesor/page-materias-profe/page-materias-profe.component';
import { AlumnosBorradosComponent } from './usuarios/alumnos-borrados/alumnos-borrados.component';

import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AdminGuard] },
  { path: 'alumnosborrados', component: AlumnosBorradosComponent, canActivate: [AdminGuard] },
  { path: 'crearmateria', component: PageCrearMateriaComponent, canActivate: [AdminGuard] },
  { path: 'inscripcionmateria', component: PageInscripcionMateriaComponent},
  { path: 'mismaterias', component: MisMateriasComponent},
  { path: 'miscalificaciones', component: MisCalificacionesComponent},
  { path: 'examenes', component: PageExamenesComponent},
  { path: 'actasexamenes', component: PageActasExamenesComponent},
  { path: 'materiasprofe', component: PageMateriasProfeComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }