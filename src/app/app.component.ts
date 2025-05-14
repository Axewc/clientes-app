import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterOutlet} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterModule.forRoot(routes), RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido al curso de Angular';
  curso: string = 'Angular 16';
  profesor: string = 'Andres Guzman';
}
