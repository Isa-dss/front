import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmailComponent } from './email/email.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRequest } from '../model/usuarioRequest';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';
import { QuizComponent } from './quiz/quiz.component';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    EmailComponent,
    MainComponent,
    PerfilComponent,
    MenuComponent,
    QuizComponent

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
