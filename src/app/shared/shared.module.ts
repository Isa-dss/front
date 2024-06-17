import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { ListboxModule } from 'primeng/listbox';


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
    ToastModule,
    MatSidenavModule,
    MatListModule,
    ListboxModule,

  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsetModule,
    PasswordModule,
    CalendarModule,
    MessageModule,
    ToastModule,
    MatSidenavModule,
    MatListModule,
    ListboxModule,

  ]
})
export class SharedModule { }

