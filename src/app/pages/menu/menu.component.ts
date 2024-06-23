import { Component, ViewChild  } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isExpanded = false;

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;

}
