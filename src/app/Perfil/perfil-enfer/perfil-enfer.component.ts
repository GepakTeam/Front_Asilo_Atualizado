import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-enfer',
  standalone: true,
  imports: [],
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
