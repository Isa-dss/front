import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmailComponent } from './email/email.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRequest } from '../model/usuarioRequest';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    EmailComponent,
    MainComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ToastModule,
    ChartModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
