import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsetModule,
    PasswordModule,
    CalendarModule,
    MessageModule,
    ToastModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsetModule,
    PasswordModule,
    CalendarModule,
    MessageModule,
    ToastModule
  ]
})
export class SharedModule { }
