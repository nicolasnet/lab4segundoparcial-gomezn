import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notaTexto'
})
export class NotaTextoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value<4){
      return "desaprobado"
    }else if(value < 7){
      return "aprobado"
      }else {
        return "promocionado"
      }
    
  }

}
