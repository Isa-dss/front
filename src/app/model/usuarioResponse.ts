import { Curso } from './curso';
import { TipoUsuario } from './tipoUsuario';


export class UsuarioResponse {
  //  usuarioId?: UUID;
   nome?: string;
   username?: string;
   emailValido?:string;
   dataNascimento?: Date;
   senha?:string;
   curso?:Curso;
   tipoUsuario?:TipoUsuario;
   dataCriado?: Date;

}
