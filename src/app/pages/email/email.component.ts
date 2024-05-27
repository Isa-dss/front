import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../../service/cadastro.service';
import { VerificacaoEmailRequest } from '../../model/verificacaoEmailRequest';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent implements OnInit {

  constructor (
    private service: CadastroService
  ){}

  token!:VerificacaoEmailRequest;

  ngOnInit(): void {
  }


  verificar(){
    this.service.verficarEmail(this.token).subscribe({
      next: (result) => {
        console.log("A requisição foi um sucesso!" + this.token );
        console.log(result);
      },
      error: (erro) => {
        console.log("A requisição não teve sucesso", JSON.stringify(erro));
        console.log(erro);
      }
    })
  }


}
