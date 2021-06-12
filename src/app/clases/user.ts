

export type Roles = 'alumno' | 'profesor' | 'admin';

export class User {
    uid?: string;
    email?: string;
    displayName?: string;
    emailVerified?: boolean;
    password?: string;
    photoURL?: string;
    role?: Roles;
    edad?: number;
    nombre?: string;
    apellido?: string;
    imgPerfil?: File;
    vigente?: boolean;

    constructor(){
        
    }
}
