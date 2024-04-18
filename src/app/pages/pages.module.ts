import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {PrimengModule} from '../../assets/shared/primeng.module'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputMaskModule } from 'primeng/inputmask';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent

  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    InputMaskModule,
    FormsModule,
    MatButtonModule
  ]
})
export class PagesModule { }
