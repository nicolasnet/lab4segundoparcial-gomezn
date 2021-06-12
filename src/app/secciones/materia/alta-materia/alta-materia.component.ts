import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Materia } from 'src/app/clases/materia';
import { MateriasFirebaseService } from 'src/app/services/materias-firebase.service';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  @Input() profesorParaMostrar: object;
  @Output() eventNuevomateria: EventEmitter<any> = new EventEmitter<any>();
  public forma: FormGroup;
  listaActores: any;

  constructor(private fb: FormBuilder, private materiaService: MateriasFirebaseService) {
    // this.materiaService.getAll().subscribe(actores =>{
      
    //   this.listaActores=actores;
    // })
  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', Validators.required],
      'cuatrimestre':['', [Validators.required,Validators.min(1), Validators.max(2)]],     
      'year': ['', [Validators.required, Validators.min(2000), Validators.max(3000)]],
      'capacidad': ['', Validators.required],
      'profesor': [''],      
    });
  }

  nuevaMateria(){
    
    const materiaNuevo = new Materia;
    
    materiaNuevo.nombre = this.toTitleCase(this.forma.get('nombre').value.toUpperCase());
    materiaNuevo.cuatrimestre = this.forma.get('cuatrimestre').value;
    materiaNuevo.year = this.forma.get('year').value;
    materiaNuevo.cupoAlumnos = this.forma.get('capacidad').value;
    materiaNuevo.profesor = this.profesorParaMostrar;
    
    this.materiaService.create(materiaNuevo);    
  }

  toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();    
}

}
