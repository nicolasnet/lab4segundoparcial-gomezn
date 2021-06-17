import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Materia } from 'src/app/clases/materia';
import { FileFirestoreService } from 'src/app/services/file-firestore.service';
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
  imgPerfil: any;

  constructor(private fb: FormBuilder, private materiaService: MateriasFirebaseService, private firebaseStorage: FileFirestoreService, private navegador: Router) {
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
      'img': ['', Validators.required],
      'profesor': [''],      
    });
  }

  nuevaMateria(){
    
    const materiaNueva = new Materia;
    
    materiaNueva.nombre = this.forma.get('nombre').value.toUpperCase();
    materiaNueva.cuatrimestre = this.forma.get('cuatrimestre').value;
    materiaNueva.year = this.forma.get('year').value;
    materiaNueva.cupoAlumnos = this.forma.get('capacidad').value;
    materiaNueva.profesor = this.profesorParaMostrar;
    materiaNueva.id = materiaNueva.nombre + materiaNueva.year + materiaNueva.cuatrimestre;
    this.subirArchivos(materiaNueva);
    
    this.materiaService.create(materiaNueva);
    this.navegador.navigate(['']) 
  }

  toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();    
  }

  handleImgagen(event: any): void {
    this.imgPerfil = event.target.files[0];
  }

  public async subirArchivos(materiaNueva: Materia) {
    this.firebaseStorage.uploadImage(this.imgPerfil, materiaNueva.id + "-imagen.jpg", materiaNueva.id , "imagen")
  }

}
