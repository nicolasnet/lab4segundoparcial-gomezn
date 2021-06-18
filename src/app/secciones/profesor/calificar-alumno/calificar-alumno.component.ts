import { Component, Input, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Calificacion } from 'src/app/clases/calificacion';
import { Examenes } from 'src/app/clases/examenes';
import { Materia } from 'src/app/clases/materia';
import { User } from 'src/app/clases/user';
import { CalificacionesFirebaseService } from 'src/app/services/calificaciones-firebase.service';
import { ExamenesFirebaseService } from 'src/app/services/examenes-firebase.service';

@Component({
  selector: 'app-calificar-alumno',
  templateUrl: './calificar-alumno.component.html',
  styleUrls: ['./calificar-alumno.component.css']
})
export class CalificarAlumnoComponent implements OnInit {

  @Input() alumnoParaAsignar: User;
  @Input() materiaParaAsignar: Materia;
  @Input() examenCreado: Examenes;

  public forma: FormGroup;
  calificacion: Calificacion;
  mostrar = true;
  hayCalificacion: boolean;

  constructor(private fb: FormBuilder, private calificacionServ: CalificacionesFirebaseService, private examenServ: ExamenesFirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
     'nota': ['',[Validators.required, Validators.min(1), Validators.max(10)]]     
    });
  }

  Calificar(){
    this.mostrar = true
    this.calificacion = new Calificacion();
    this.calificacion.alumno = this.alumnoParaAsignar;
    this.calificacion.materia = this.materiaParaAsignar;
    this.calificacion.nota = <number> this.forma.get('nota').value;
    this.calificacion.fecha = this.examenCreado.fecha;
    this.calificacion.tipo = this.examenCreado.tipo

    // this.examenCreado.materia = this.materiaParaAsignar.id;
    // this.examenCreado.listadoCalificaciones.push(this.calificacion);
    
    
    this.calificacionServ.create(this.calificacion);
    this.mostrar = false;
    this.hayCalificacion = true;
  }

  FinalizarExamen(){
    let calificacion = this.calificacion;
    this.examenServ.create(Object.assign({}, calificacion));
    this.router.navigate(['']);
  }

}
