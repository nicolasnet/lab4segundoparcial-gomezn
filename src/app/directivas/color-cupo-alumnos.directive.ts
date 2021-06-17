import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorCupoAlumnos]'
})
export class ColorCupoAlumnosDirective implements OnInit{

  @Input() appColorCupoAlumnos;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.cambioColor(this.appColorCupoAlumnos)
  }

  private cambioColor(numero: number){
    if(numero >20){
      this.el.nativeElement.style.color = 'lightseagreen';
    }else if(numero >10){
      this.el.nativeElement.style.color = 'blue';
    }else{
      this.el.nativeElement.style.color = 'red';
    }
  }

}
