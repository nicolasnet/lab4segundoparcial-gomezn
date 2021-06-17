import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../clases/user';

@Pipe({
  name: 'cambioTipoUser'
})
export class CambioTipoUserPipe implements PipeTransform {

  transform(usuario: User, ...args: unknown[]): unknown {
    switch(usuario.role){
      case "profesor":
        return "PROFESOR activo";
      case "alumno":
        if(usuario.disponible){
          return "ALUMNO VIGENTE";
        }else{
          return "ALUMNO BORRADO";
        }
        
      case "admin":
        return "ADMINISTRADOR"
    }
    
  }

}
