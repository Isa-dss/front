import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EmailComponent } from './pages/email/email.component';
import { MainComponent } from './pages/main/main.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'email' , component: EmailComponent},
  {path: 'main' , component: MainComponent},
  {path: 'perfil' , component: PerfilComponent},
  {path: 'menu' , component: MenuComponent},



];
