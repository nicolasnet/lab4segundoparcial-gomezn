import { Materia } from "./materia";
import { User } from "./user";

export type tipos = '1erParcial' | '2doParcial' | 'final';

export class Calificacion {
    id: string; // id de materia y email de alumno
    materia?: Materia;
    alumno: User;
    nota: number;
    fecha?: Date;
    tipo?: tipos;
}