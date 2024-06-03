import { Router } from '@angular/router';
// import { CadastroService } from '../../service/cadastro.service';
import { PagesModule } from './../pages.module';
import { Component, OnInit } from '@angular/core';
import { UsuarioRequest } from '../../model/usuarioRequest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../../service/cadastro.service';
import { criarSenhaForte } from '../../validators/password';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit{

  // loginForm!: FormGroup;
  loginForm!:FormGroup;


constructor (
 private service: CadastroService,
 private message: MessageService,
 private fb: FormBuilder,
 private routeador: Router
){}


  ngOnInit(): void {
    this.initForm();
  }

  get f (){return this.loginForm.controls};

initForm(){
  this.loginForm = this.fb.group(
    {
      login: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(8), criarSenhaForte()])],
    }
  );
}

logar(){
  this.service.logar(this.loginForm.value).subscribe({
    next: (result) => {
      console.log(result);
      this.routeador.navigate(['/main']);
    },
    error: (erro) => {
      this.message.add({severity:'error', summary: 'Erro', detail: 'Não foi possivel fazer o login' })
      console.log("A requisição não teve sucesso", JSON.stringify(erro));
      console.log(erro);


    }
  })
}


cadastro(){
  this.routeador.navigate(['/cadastro']);
}


}
