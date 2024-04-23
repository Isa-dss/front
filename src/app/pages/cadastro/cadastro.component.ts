import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroService } from '../../service/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

@Injectable()
export class CadastroComponent implements OnInit {

cadastroForm!: FormGroup;

constructor (
 private service: CadastroService,
 private fb: FormBuilder,
 private routeador: Router
){}

ngOnInit(): void {
    this.initForm();
}


initForm(){
  this.cadastroForm = this.fb.group(
    {
      nome: [null],
      username: [null],
      email: [null],
      dataNascimento: [null],
      senha: [null],
      curso: [null],
    }
  );
}

cadastrar(){
  this.service.servicoCadastrar(this.cadastroForm.value).subscribe({
    next: (result) => {
      console.log("A requisição foi um sucesso! ");
      console.log(result);
      console.log(this.cadastroForm.value);
    },
    error: (erro) => {
      console.log("A requisição não teve sucesso", JSON.stringify(erro));
      console.log(erro);
      console.log(this.cadastroForm.value);


    }
  })
}

login(){
  this.routeador.navigate([''])
}

}
