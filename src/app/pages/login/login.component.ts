import { Router } from '@angular/router';
// import { CadastroService } from '../../service/cadastro.service';
import { PagesModule } from './../pages.module';
import { Component } from '@angular/core';
import { UsuarioRequest } from '../../model/usuarioRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

   constructor( //private service:LoginService ,
     private router: Router) { }

  ngOnInit(): void { }

  login(){
      this.router.navigate(['cadastro'])
  }

}
