import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { User } from '../clases/user';

@Directive({
  selector: '[appColorSituacionAlumno]'
})
export class ColorSituacionAlumnoDirective implements OnInit{

  @Input() appColorSituacionAlumno;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.cambioColor(this.appColorSituacionAlumno)
  }

  private cambioColor(usuario: User){
    switch(usuario.role){
      case "alumno":
        if(usuario.disponible){
          this.el.nativeElement.style.color = 'lightseagreen';
        }else{
          this.el.nativeElement.style.color = 'red';
        }
        break;
      case "profesor":
        this.el.nativeElement.style.color = 'blue';
        break;
      case "admin":
        this.el.nativeElement.style.color = 'black';
        break;
    }
    
  }

}
