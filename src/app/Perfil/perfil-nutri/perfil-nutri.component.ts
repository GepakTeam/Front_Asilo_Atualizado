import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-nutri',
  standalone: true,
  imports: [],
  templateUrl: './perfil-nutri.component.html',
  styleUrl: './perfil-nutri.component.css'
})
export class PerfilNutriComponent {
  constructor(private router: Router){

  }

  routerNutri(){
    this.router.navigate(['/nutricionista']);
  }
  routerNutriLista(){
    this.router.navigate(['/listaNutricionista']);
  }
}
