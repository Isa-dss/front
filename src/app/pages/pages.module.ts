import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {PrimengModule} from '../../assets/shared/primeng.module'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EmailComponent } from './email/email.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    EmailComponent,
    MainComponent
  
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
  ]
})
export class PagesModule { }
