import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioTipoUser'
})
export class CambioTipoUserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(value){
      case "profesor":
        return "PROFESOR activo";
      case "alumno":
        return "ALUMNO vigente";
      case "admin":
        return "ADMINISTRADOR"
    }
    
  }

}
