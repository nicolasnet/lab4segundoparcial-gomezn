import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn= false;
  errorIngreso=false;
  emailIngreso: string = "";
  contraIngreso: string = "";
  listaUsuarios: any[];
  mostrar = false;
  mostrarError = false;
  usuarioLogueado;
  error: string;
  user: any;


  constructor(public firebaseService: AuthFirebaseService, private router: Router, private usuariosFire: UsuariosFirebaseService) { 
    // this.usuariosFire.getAll().subscribe(listado =>{
    //      this.listaUsuarios=listado;
    // });
  }

  ngOnInit(): void {
  }
  
  async OnSignIn(email:string, password: string){
    try {
      this.user = await this.firebaseService.SignIn(email,password);
      this.checkUserIsVerified(this.user);
      localStorage.setItem('usuario', email);
    } catch (error) {
      
      // this.router.navigate(['/registro']);
      console.log(error);
    }
  }

  private async checkUserIsVerified(user: any) {
  if (user) {
    await this.usuariosFire.obtenerUsuario(user.email);
    this.usuarioLogueado = this.usuariosFire.usuarioSeleccionado;
    if(this.usuarioLogueado.disponible && !this.usuarioLogueado.disponible){
      console.log("entra en usuario no disponible");
      this.router.navigate(['usuarioborrado']);

    }else{
      localStorage.setItem('role', this.usuarioLogueado.role);
      console.log("LOGIN: el Role que loguea es: "+this.usuarioLogueado.role);
      this.router.navigate(['/']);
    }
    
  }else {
    this.mostrarError = true;
  }

      //// con verificacion de email
    // if (user && user.emailVerified) {
    //   await this.usuariosFire.obtenerUsuario(user.email);
    //   this.usuarioLogueado = this.usuariosFire.usuarioSeleccionado;
    //   console.log(this.usuarioLogueado.role);
    //   if(this.usuarioLogueado.role == 'especialista'){
    //     console.log("entra en login para especialista");
    //     if(!this.usuarioLogueado.verificacionEspec){
    //       console.log("entra en login para especialista sin verificacion por Admin");
    //       this.router.navigate(['/verificacion-especialista']);
    //     }else{
    //       localStorage.setItem('role', this.usuarioLogueado.role);
    //       console.log("LOGIN: el Role que loguea es: "+this.usuarioLogueado.role);
    //       this.router.navigate(['/']);
    //     }
    //   }else{
    //     localStorage.setItem('role', this.usuarioLogueado.role);
    //     console.log("LOGIN: el Role que loguea es: "+this.usuarioLogueado.role);
    //     this.router.navigate(['/']);
    //   }      
    // } else if (user) {
    //   this.router.navigate(['/verificacion-email']);
    // } else {
    //   this.router.navigate(['/registro']);
    // }
  }


  CompletaIngreso(ingreso: string){
    switch(ingreso){
      case "adm1":
        this.emailIngreso= "niconetgomez@hotmail.com";
        this.contraIngreso = "123456";
        break;
      case "adm2":
        this.emailIngreso= "nicogomez27@gmail.com";
        this.contraIngreso = "123456";        
        break;
      case "paciente1":
        this.emailIngreso= "alumno@gmail.com";
        this.contraIngreso = "123456";
        break;
      case "paciente2":
        this.emailIngreso= "123@123.com";
        this.contraIngreso = "123456";
        break;
      case "especialista1":
        this.emailIngreso= "octavio@gmail.com";
        this.contraIngreso = "octavio";
        break;
      case "especialista2":
        this.emailIngreso= "matias@gmail.com";
        this.contraIngreso = "matias";
        break;
      case "especialista3":
        this.emailIngreso= "maxi@gmail.com";
        this.contraIngreso = "maxi01";
        break;
    }
    
  }

  Mostrar(){
    this.mostrar = !this.mostrar;
  }

}
