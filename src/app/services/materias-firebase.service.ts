import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Materia } from '../clases/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriasFirebaseService {

  private dbpath = '/materias'; //ruta de la coleccion de firebase.
  mensajesRef: AngularFirestoreCollection<Materia>;
  mensajes:Observable<any[]>;
  MateriaSeleccionado: unknown;
  idMateriaSeleccionado: string;
  listadoMateriasDisponibles;
  listadoMateriasDisponiblesRef;

  constructor(private db: AngularFirestore) {
    this.listadoMateriasDisponiblesRef=db.collection<any>(this.dbpath, ref => ref.where('estado', '==', "disponible").orderBy('dia'));
    this.listadoMateriasDisponibles=this.listadoMateriasDisponiblesRef.valueChanges(this.dbpath);

    this.mensajesRef=db.collection<any>(this.dbpath, ref => ref.orderBy('dia'));
    this.mensajes=this.mensajesRef.valueChanges(this.dbpath);

  }

  obtenerMateriasDisponibles(){
    return this.listadoMateriasDisponibles;
  }

  getAll(){
    return this.mensajes;
  }

  async obtenerMateriasPaciente(email: string){
    await this.db.collection(this.dbpath).ref.where('paciente.email', '==', email).get().then((responce)=>{
      console.log("entra en obtenerMateriasPaciente")
      this.MateriaSeleccionado = responce.docs;
    });
  }



  async obtenerMateriasEspecialistas(email: string){
    await this.db.collection(this.dbpath).ref.where('medico.email', '==', email).get().then((responce)=>{
      console.log("entra en obtenerMaterias de los especialistas")
      this.MateriaSeleccionado = responce.docs;
    });
  }



  async obtenerMateriaPorId (id: string){
    await this.db.collection(this.dbpath).ref.where('id', '==', id).get().then((responce)=>{
      this.MateriaSeleccionado = responce.docs[0].data();
      this.idMateriaSeleccionado = responce.docs[0].id;

      // console.log(responce.docs[0].data());
    });
  }

  async obtenerMateriaPorEspecialidad (especialidad: string){
    await this.db.collection(this.dbpath).ref.where('especialidad', '==', especialidad).get().then((responce)=>{
      this.MateriaSeleccionado = responce.docs[0].data();
    });
  }
 



  create(mensaje: Materia): any{
    console.log("Entro a funcion create de MateriaS");
    return this.mensajesRef.add({...mensaje});
  }


  update(id: string, data: any): Promise<void> {
    return this.mensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.mensajesRef.doc(id).delete();
  }
}
