import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Examenes } from 'src/app/clases/examenes';

@Component({
  selector: 'app-datos-examenes',
  templateUrl: './datos-examenes.component.html',
  styleUrls: ['./datos-examenes.component.css']
})
export class DatosExamenesComponent implements OnInit {

  public forma: FormGroup;
  listadoTipos = new Array<string>("1erParcial", "2doParcial", "final");
  mostrar = true;
  @Output() eventDatosSeleccionados: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'tipo': ['', Validators.required],
      'fecha': ['', Validators.required],
      
    }); 
  }

  CrearExamen(){
    this.mostrar = false;
    let nuevoExamen = new Examenes();
    nuevoExamen.fecha = this.forma.get('fecha').value;
    nuevoExamen.tipo = this.forma.get('tipo').value;
    this.eventDatosSeleccionados.emit(nuevoExamen);

  }

}
