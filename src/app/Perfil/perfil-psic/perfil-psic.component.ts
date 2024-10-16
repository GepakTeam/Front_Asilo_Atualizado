import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-psic',
  standalone: true,
  imports: [],
  templateUrl: './perfil-psic.component.html',
  styleUrl: './perfil-psic.component.css'
})
export class PerfilPsicComponent {
  constructor(private router: Router){

  }

  routerPsic(){
    this.router.navigate(['/psicologa']);
  }
  routerPsicLista(){
    this.router.navigate(['/listaPsicologa']);
  }
}
