import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-adm',
  standalone: true,
  imports: [],
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
