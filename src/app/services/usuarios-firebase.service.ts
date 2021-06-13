import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../clases/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosFirebaseService {

  private dbpath = '/usuarios'; //ruta de la coleccion de firebase.
  usuariosRef: AngularFirestoreCollection<User>;
  usuarios:Observable<any[]>;
  id: string;
  role: string;
  usuarioSeleccionado: any;
  profesoresRef: AngularFirestoreCollection<any>;
  profesores: Observable<User[]>;
  alumnosRef: AngularFirestoreCollection<any>;
  alumnos: Observable<User[]>;

  constructor(private db: AngularFirestore) {
    this.profesoresRef=db.collection<any>(this.dbpath, ref => ref.where('role', '==', "profesor").orderBy('apellido'));
    this.profesores=this.profesoresRef.valueChanges(this.dbpath);

    this.alumnosRef=db.collection<any>(this.dbpath, ref => ref.where('role', '==', "alumno").orderBy('apellido'));
    this.alumnos=this.alumnosRef.valueChanges(this.dbpath);

    this.usuariosRef=db.collection<any>(this.dbpath, ref => ref.orderBy('apellido'));
    this.usuarios=this.usuariosRef.valueChanges(this.dbpath);
  }

  getAllProfesores(){
    return this.profesores
  }

  getAllAlumnos(){
    return this.alumnos
  }

  async obtenerID(email: string){
    await this.db.collection('/usuarios').ref.where('email', '==', email).get().then((responce)=>{
      this.id = responce.docs[0].id;
      
    });
  }

  async obtenerRole(email: string){
    await this.db.collection('/usuarios').ref.where('email', '==', email).get().then((responce)=>{
      this.role = responce.docs[0].data()["role"];
      console.log(responce.docs[0].data()["role"]);
    });
  }

  async obtenerUsuario(email: string){
    await this.db.collection('/usuarios').ref.where('email', '==', email).get().then((responce)=>{
      this.usuarioSeleccionado = responce.docs[0].data();
      // console.log(responce.docs[0].data());
    });
  }


  getAll(){
    return this.usuarios;
  }

  create(mensaje: User): any{
    let data = this.usuariosRef.add({...mensaje});
    
    return data;
  }


  update(id: string, data: any): Promise<void> {
    return this.usuariosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.usuariosRef.doc(id).delete();
  }
}
