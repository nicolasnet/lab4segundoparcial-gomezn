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
  MateriaSeleccionada: unknown;
  idMateriaSeleccionada: string;
  listadoMateriasDisponibles;
  listadoMateriasDisponiblesRef;

  constructor(private db: AngularFirestore) {
    this.listadoMateriasDisponiblesRef=db.collection<any>(this.dbpath, ref => ref.where('estado', '==', "disponible").orderBy('dia'));
    this.listadoMateriasDisponibles=this.listadoMateriasDisponiblesRef.valueChanges(this.dbpath);

    this.mensajesRef=db.collection<any>(this.dbpath, ref => ref.orderBy('nombre'));
    this.mensajes=this.mensajesRef.valueChanges(this.dbpath);

  }


  async obtenerID(nombre: string){
    await this.db.collection(this.dbpath).ref.where('nombre', '==', nombre).get().then((responce)=>{
      this.idMateriaSeleccionada = responce.docs[0].id;
      
    });
  }


  async obtenerMateriaPorNombre(nombre: string){
    await this.db.collection(this.dbpath).ref.where('nombre', '==', nombre).get().then((responce)=>{
      console.log("entra en obtenerMaterias de los especialistas")
      this.MateriaSeleccionada = responce.docs;
    });
  }



  obtenerMateriasDisponibles(){
    return this.listadoMateriasDisponibles;
  }

  getAll(){
    return this.mensajes;
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
