import { Component, OnInit, ViewChild  } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { UsuarioService } from '../../service/usuario.service';
import { UsuarioResponse } from '../../model/usuarioResponse';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  user!: UsuarioResponse;
  isExpanded = false;

  constructor (private userService: UsuarioService){}

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;

}
