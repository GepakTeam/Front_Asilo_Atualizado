import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';

@Component({
  selector: 'app-perfil-fisio',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './perfil-fisio.component.html',
  styleUrl: './perfil-fisio.component.css'
})
export class PerfilFisioComponent {
  constructor(private router: Router){

  }

  routerFisio(){
    this.router.navigate(['/fisioterapia']);
  }
  routerFisioLista(){
    this.router.navigate(['/listaFisioterapia']);
  }
}
