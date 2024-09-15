import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndividualComponent } from './Prontuarios/individual/individual.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Core/NavBar/navbar.component';
import { ListaIndComponent } from './Lista/lista-ind/lista-ind.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, IndividualComponent, LoginComponent, HttpClientModule, ListaIndComponent, NavbarComponent]
})
export class AppComponent {
  title = 'gepak';
}
