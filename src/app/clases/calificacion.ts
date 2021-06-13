import { Materia } from "./materia";
import { User } from "./user";

export class Calificacion {
    materia: Materia;
    alumno: User;
    nota: number;
}