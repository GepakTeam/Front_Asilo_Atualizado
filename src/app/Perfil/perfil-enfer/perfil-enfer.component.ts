import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';

@Component({
  selector: 'app-perfil-enfer',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './perfil-enfer.component.html',
  styleUrl: './perfil-enfer.component.css'
})
export class PerfilEnferComponent {
  constructor(private router: Router){

  }

  routerEnf(){
    this.router.navigate(['/enfermagem']);
  }
  routerEnfLista(){
    this.router.navigate(['/listaEnfermagem']);
  }
}
