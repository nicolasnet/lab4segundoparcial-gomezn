import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileI } from '../clases/file-i';
import { MateriasFirebaseService } from './materias-firebase.service';
import { UsuariosFirebaseService } from './usuarios-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FileFirestoreService {
  private filePath: any;
  public downloadURL: Observable<string>;
  imgUrl: string;


  constructor(private storage: AngularFireStorage, private usuariosServ: UsuariosFirebaseService, private materiasServ: MateriasFirebaseService) { }

  public uploadImage(image: FileI, nombre: string, idUnico: string, tipoDeFoto: string) {
    this.filePath = `images/${nombre}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(async urlImage => {
            // console.log("dentro del servicio: "+urlImage);
            

            switch(tipoDeFoto){
              case "imgPerfil":
                await this.usuariosServ.obtenerID(idUnico);
                this.usuariosServ.update(this.usuariosServ.id, {imgPerfil: urlImage});
                break;
              case "imagen":
                await this.materiasServ.obtenerID(idUnico);
                this.materiasServ.update(this.materiasServ.idMateriaSeleccionada, {imagen: urlImage});
                break;
              case "imgFrente":
                await this.usuariosServ.obtenerID(idUnico);
                this.usuariosServ.update(this.usuariosServ.id, {imgFrente: urlImage});
                break;
            }
      
          });
        })
      ).subscribe();
  }


     //Tarea para subir archivo
     public tareaCloudStorage(nombreArchivo: string, datos: any) {
      return this.storage.upload(nombreArchivo, datos);
    }
  
    //Referencia del archivo
    public referenciaCloudStorage(nombreArchivo: string) {
      return this.storage.ref(nombreArchivo);
    }




}
export const FotosUsuario_STORAGE_PATH = `/images/`;