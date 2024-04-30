import { Router } from '@angular/router';
// import { CadastroService } from '../../service/cadastro.service';
import { PagesModule } from './../pages.module';
import { Component, OnInit } from '@angular/core';
import { UsuarioRequest } from '../../model/usuarioRequest';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroService } from '../../service/cadastro.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // loginForm!: FormGroup;
  login!:string;
  senha!:string;


constructor (
 private service: CadastroService,
 private fb: FormBuilder,
 private routeador: Router
){}


  ngOnInit(): void {
    this.initForm();
  }


initForm(){
  // this.loginForm = this.fb.group(
  //   {
  //     email: [null],
  //     senha: [null],
  //   }
  // );
}

logar(){
  this.service.logar(this.login, this.senha).subscribe({
    next: (result) => {
      console.log("A requisição foi um sucesso! ");
      console.log(result);
      this.routeador.navigate(['/main']);
    },
    error: (erro) => {
      console.log("A requisição não teve sucesso", JSON.stringify(erro));
      console.log(erro);


    }
  })
}

cadastro(){
  this.routeador.navigate(['/cadastro']);
}


}
