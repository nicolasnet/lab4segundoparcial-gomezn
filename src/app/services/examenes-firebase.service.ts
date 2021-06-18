import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Calificacion } from '../clases/calificacion';
import { Examenes } from '../clases/examenes';

@Injectable({
  providedIn: 'root'
})
export class ExamenesFirebaseService {

  private dbpath = '/examenes'; //ruta de la coleccion de firebase.
  mensajesRef: AngularFirestoreCollection<Calificacion>;
  mensajes:Observable<any[]>;
  CalificacionSeleccionada: unknown;
  idCalificacionSeleccionada: string;
  listadoCalificacionesDisponibles;
  listadoCalificacionesDisponiblesRef;

  constructor(private db: AngularFirestore) {
    this.mensajesRef=db.collection<any>(this.dbpath, ref => ref.orderBy('materia.id'));
    this.mensajes=this.mensajesRef.valueChanges(this.dbpath);
  }


  async obtenerID(idUnico: string){
    await this.db.collection(this.dbpath).ref.where('id', '==', idUnico).get().then((responce)=>{
      this.idCalificacionSeleccionada = responce.docs[0].id;
      
    });
  }


  // async obtenerExamenesPorAlumno(email: string){
  //   await this.db.collection(this.dbpath).ref.where('alumno.email', '==', email).get().then((responce)=>{
  //     console.log("entra en obtenerCalificacions de los especialistas");
  //     this.CalificacionSeleccionada = responce.docs;
  //   });
  // }


  getAll(){
    return this.mensajes;
  }


  create(mensaje: Calificacion): any{
    console.log("Entro a funcion create de CalificacionS");
    return this.mensajesRef.add({...mensaje});
  }


  update(id: string, data: any): Promise<void> {
    return this.mensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.mensajesRef.doc(id).delete();
  }
}
