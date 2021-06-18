import { Calificacion } from "./calificacion";
import { Materia } from "./materia";

export type tipos = '1erParcial' | '2doParcial' | 'final';

export class Examenes {

    listadoCalificaciones?: Array<Calificacion>;
    fecha : Date;
    tipo: tipos;
    materia?: string;

    constructor(){
        this.listadoCalificaciones = new Array<Calificacion>();
    }

}
