import { Materia } from "./materia";
import { User } from "./user";

export class Calificacion {
    id: string; // id de materia y email de alumno
    materia: Materia;
    alumno: User;
    nota: number;
}