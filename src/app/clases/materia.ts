import { User } from "./user";

export class Materia {
    id: string;
    nombre: string;
    cuatrimestre: number;
    cupoAlumnos: number;
    year: number;
    profesor?: User;
    listadoAlumnos: Array<User>;
    imagen: File;

    constructor(){
        this.listadoAlumnos = new Array<User>();
    }
}
