import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from "./pages/pages.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PagesModule]
})
export class AppComponent {
  title = 'front';
}
