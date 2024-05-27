import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmailComponent } from './email/email.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    ToastModule
    ]
})
export class PagesModule { }
