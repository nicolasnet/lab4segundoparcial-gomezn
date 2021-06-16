import { Component, Input, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Calificacion } from 'src/app/clases/calificacion';
import { Materia } from 'src/app/clases/materia';
import { User } from 'src/app/clases/user';
import { CalificacionesFirebaseService } from 'src/app/services/calificaciones-firebase.service';

@Component({
  selector: 'app-calificar-alumno',
  templateUrl: './calificar-alumno.component.html',
  styleUrls: ['./calificar-alumno.component.css']
})
export class CalificarAlumnoComponent implements OnInit {

  @Input() alumnoParaAsignar: User;
  @Input() materiaParaAsignar: Materia;
  public forma: FormGroup;
  calificacion: Calificacion;

  constructor(private fb: FormBuilder, private calificacionServ: CalificacionesFirebaseService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
     'nota': ['',[Validators.required, Validators.min(1), Validators.max(10)]]     
    });
  }

  Calificar(){
    this.calificacion = new Calificacion();
    this.calificacion.alumno = this.alumnoParaAsignar;
    this.calificacion.materia = this.materiaParaAsignar;
    this.calificacion.nota = <number> this.forma.get('nota').value;

    this.calificacionServ.create(this.calificacion);


  }

}
