import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-usuario-borrado',
  templateUrl: './usuario-borrado.component.html',
  styleUrls: ['./usuario-borrado.component.css']
})
export class UsuarioBorradoComponent implements OnDestroy {

  public user$: Observable<any> = this.authSvc.firebaseAuth.user;

  constructor(private authSvc: AuthFirebaseService) { }  

  ngOnDestroy() {
    this.Desconectar();
  }

  Desconectar(){
    this.authSvc.LogOut();
  }

}
