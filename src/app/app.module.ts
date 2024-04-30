import { PrimengModule } from '../assets/shared/primeng.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importe CUSTOM_ELEMENTS_SCHEMA
import { CadastroService } from './service/cadastro.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importe BrowserAnimationsModule
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';





@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PagesModule,
    PrimengModule,
    AppComponent,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule


  ],
  providers: [
    CadastroService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
