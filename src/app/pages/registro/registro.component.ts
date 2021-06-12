import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { FileFirestoreService } from 'src/app/services/file-firestore.service';
import { UsuariosFirebaseService } from 'src/app/services/usuarios-firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  alumno=false;
  profesor=false;
  muestra=false;
  public forma: FormGroup; 
  errorIngreso=false;
  imgPerfil: any;
  disabled = true;
  // siteKey: string; para RECAPTCHA

  role: any;
  imgPerfilURL: any;

  constructor(private fb: FormBuilder,
    public firebaseService: AuthFirebaseService,
    private router: Router,
    private usuarioService: UsuariosFirebaseService,
    private firebaseStorage: FileFirestoreService) {
      // this.siteKey = '6LdvifwaAAAAAD3uKrRZK3ZzTbAkGezZLRrI7yZk';  ESTO ES PARA RECAPTCHA
      this.role = localStorage.getItem('role');
      console.log(this.role);
      

   }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', Validators.required],
      'apellido':['', [Validators.required], this.spaceValidator],
      // 'edad': ['',[Validators.required, Validators.min(16), Validators.max(99)]],
      // 'dni': ['', [Validators.required, Validators.max(99999999)]],
      'email': ['', [Validators.email, Validators.required]],      
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'password2': ['', [Validators.required, Validators.minLength(6)]],
      'imgPerfil': ['', Validators.required],
      // 'reRaptcha': ['', Validators.required],
    });
  }


  

  
  private async spaceValidator(control: AbstractControl): Promise<object>{
    console.log("entra en spaceControl");
    const nombre = <string> control.value;
    const espacios = nombre.includes(' ');

    if(espacios){
      return {
        contieneEspacios: true
      };
    }else{
      return null;
    }
  }

  toTitleCase(str: string) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();   
  }




  async NuevoRegistro(){    
    if(this.forma.get('password').value == this.forma.get('password2').value){
      this.errorIngreso = false;      
      try {
        const user = await this.firebaseService.SignUp(this.forma.get('email').value.toLowerCase(), this.forma.get('password').value);
        if (user) {
          this.subirArchivos();
          this.CreaUsuario();
          this.checkUserIsVerified(user);
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      this.errorIngreso = true;
    }
  }
  
  private checkUserIsVerified(user: User) {
  if (user) {
        this.router.navigate(['/']);
        localStorage.setItem('usuario',this.forma.get('email').value.toLowerCase())
      } else {
        this.router.navigate(['/registro']);
      }

    // ----------- Con verificacion de email

    // if (user && user.emailVerified) {
    //   this.router.navigate(['/']);
    //   localStorage.setItem('usuario',this.forma.get('email').value.toLowerCase())
    // } else if (user) {
    //   this.router.navigate(['/verificacion-email']);
    // } else {
    //   this.router.navigate(['/registro']);
    // }
  }

  Mostrar(tipo: string){
    switch(tipo){
      case "alumno":
       
        this.muestra=true;
        this.alumno = true;
        this.profesor = false;
        break;
      case "profesor":
        
        this.muestra=true;
        this.profesor = true;
        this.alumno = false;
        break;
      case "admin":

        this.muestra=true;
        this.profesor = false;
        this.alumno = false;
        break;
      case "volver":
        this.profesor = false;
        this.alumno = false;
        this.muestra=false;
        break;
    }
  }

  CreaUsuario(){
    const usuarioNuevo = new User;

    usuarioNuevo.nombre = this.toTitleCase(this.forma.get('nombre').value);
    usuarioNuevo.apellido = this.toTitleCase(this.forma.get('apellido').value);
    usuarioNuevo.email = this.forma.get('email').value.toLowerCase();
    // usuarioNuevo.edad = this.forma.get('edad').value;
    // usuarioNuevo.dni = this.forma.get('dni').value;
    // usuarioNuevo.imgPerfil = this.forma.get('imgPerfil').value; con la funcion subir archivo esto no es necesario
    if(this.alumno){
      usuarioNuevo.role = "alumno";
    }else if(this.profesor){      
      usuarioNuevo.role = "profesor";      
    }else{
      usuarioNuevo.role = "admin"
    }
    this.usuarioService.create(usuarioNuevo);
  }

  public async subirArchivos() {
    this.firebaseStorage.uploadImage(this.imgPerfil, this.forma.get('email').value.toLowerCase() + "-imgPerfil.jpg", this.forma.get('email').value.toLowerCase(), "imgPerfil")    
  }

  handleImgPerfil(event: any): void {
    this.imgPerfil = event.target.files[0];
  }
 

  habilitar(){
    this.disabled = !this.disabled;
  }

}
