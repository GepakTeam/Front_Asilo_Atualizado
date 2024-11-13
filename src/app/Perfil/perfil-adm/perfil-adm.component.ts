import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../Core/NavBar/navbar.component";

@Component({
  selector: 'app-perfil-adm',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './perfil-adm.component.html',
  styleUrl: './perfil-adm.component.css'
})
export class PerfilAdmComponent {
  constructor(private router: Router){

  }

  routerInd(){
    this.router.navigate(['/individual']);
  }
  routerIndLista(){
    this.router.navigate(['/listaIndividual']);
  }
}