import { User } from "./user";

export class Materia {
    nombre: string;
    cuatrimestre: number;
    cupoAlumnos: number;
    year: number;
    profesor?: User;
}
