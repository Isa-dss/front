import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CadastroService } from '../../service/cadastro.service';
import { Router } from '@angular/router';
import { criarSenhaForte } from '../../validators/validators';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [MessageService]

})

@Injectable()
export class CadastroComponent implements OnInit {

cadastroForm!: FormGroup;

constructor (
 private service: CadastroService,
 private message: MessageService,
 private fb: FormBuilder,
 private routeador: Router
){}

ngOnInit(): void {
    this.initForm();
}


initForm(){
  this.cadastroForm = this.fb.group(
    {
      nome:[null, [Validators.required]],
      username:[null, [Validators.required]],
      email:[null, Validators.compose([Validators.required, Validators.email])],
      dataNascimento: [null, [Validators.required]],
      senha: [null,  Validators.compose([Validators.required, criarSenhaForte()])],
      // confirmarSenha: [null,  Validators.compose([Validators.required])], // Aqui usamos o método diretamente
      confirmarSenha: [null,  Validators.compose([Validators.required, this.validarSenhaConfirmacao()])], // Aqui usamos o método diretamente
      curso:[null, [Validators.required]],
    }
  );
}

cadastrar(){
  this.service.cadastrar(this.cadastroForm.value).subscribe({
    next: (result) => {
      console.log("A requisição foi um sucesso!");
      console.log(result);
    },
    error: (erro) => {
      this.message.add({severity:'error', summary: 'Erro', detail: 'Não foi possivel fazer o cadastro' })
      console.log(erro);
    }
  })
}

login(){
  this.routeador.navigate([''])
}


validarSenhaConfirmacao(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (this.cadastroForm.get('senha')?.value !== control.value) {
      this.cadastroForm.get('confirmarSenha')?.setErrors({ senhaDiferente: true });

      return { senhaDiferente: true };
    }

    return null;
  };
}


validarSenhas = (confirmarSenha: FormControl): ValidatorFn => {
  return (): { [key: string]: any } | null => {
    const senhaControl = this.cadastroForm.get('senha');
    const confirmarSenhaControl = this.cadastroForm.get('confirmarSenha');

    if (senhaControl?.value !== confirmarSenha?.value) {
      confirmarSenhaControl?.setErrors({ senhaDiferente: true });
    } else {
      confirmarSenhaControl?.setErrors(null);
    }
    return null;
  };
};


}
