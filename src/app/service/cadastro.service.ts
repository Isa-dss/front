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


  cadastrar(request: UsuarioRequest) : Observable <UsuarioResponse>{
    return this.httpClient.post(env.baseApiUrl + '/' +urlConfig.cadastrarUsuario, request).pipe(
      map((res:any) => res)
    )
  }


  logar(login:string, senha:string): Observable<UsuarioResponse> {
      const request = { login, senha };
    return this.httpClient.post<any>(env.baseApiUrl + '/' + urlConfig.logar+'?login='+login+'&senha='+senha, request).pipe(
      map((res:any) => res)
    )
  }

  verficarEmail(email:string): Observable<any> {
    return this.httpClient.patch<any>(env.baseApiUrl + '/' + urlConfig.verificarEmail +'/'+email,email).pipe(
      map((res:any) => res)
    )
  }
}

