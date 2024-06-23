import { Curso } from "./curso";

export class UsuarioPutRequest {
   id!: string;
   nome!: string;
   username!: string;
   email!: String;
   dataNascimento!: Date;
   curso!:Curso;

}
