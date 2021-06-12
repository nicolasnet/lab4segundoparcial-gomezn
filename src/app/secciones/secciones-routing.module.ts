import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCrearMateriaComponent } from './materia/page-crear-materia/page-crear-materia.component';

import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'crearmateria', component: PageCrearMateriaComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }