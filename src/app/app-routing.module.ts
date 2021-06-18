import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/basic/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/basic/error/error.component';
import { UsuarioBorradoComponent } from './pages/basic/usuario-borrado/usuario-borrado.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'usuarioborrado', component: UsuarioBorradoComponent},
  // { path: 'verificacion-email', component: EmailVerificationComponent},
  // { path: 'verificacion-especialista', component: EspecialistaVerificationComponent},
  { path: 'secciones', loadChildren: () => import('./secciones/secciones.module').then(m => m.SeccionesModule) },
  { path: '', component: BienvenidoComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
