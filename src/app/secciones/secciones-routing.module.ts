import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { PageInscripcionMateriaComponent } from './inscripcion/page-inscripcion-materia/page-inscripcion-materia.component';
import { PageCrearMateriaComponent } from './materia/page-crear-materia/page-crear-materia.component';

import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AdminGuard] },
  { path: 'crearmateria', component: PageCrearMateriaComponent, canActivate: [AdminGuard] },
  { path: 'inscripcionmateria', component: PageInscripcionMateriaComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }