import { PrimengModule } from '../assets/shared/primeng.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importe CUSTOM_ELEMENTS_SCHEMA
import { CadastroService } from './service/cadastro.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PagesModule,
    PrimengModule,
    AppComponent,
    HttpClientModule


  ],
  providers: [
    CadastroService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
