import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment as env } from '../../environments/enviroment';
import { urlConfig } from '../../assets/config/urlConfig';
import { UsuarioRequest } from '../model/usuarioRequest';
import { UsuarioResponse } from '../model/usuarioResponse';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient ) { }


  servicoCadastrar(request: UsuarioRequest) : Observable <UsuarioResponse>{
    return this.httpClient.post(env.baseUrl + '/' +urlConfig.cadastrarUsuario, request).pipe(
      map((res:any) => res)
    )
  }


}
