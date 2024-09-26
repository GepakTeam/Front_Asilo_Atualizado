import { Component } from '@angular/core';
import { Enfermagem } from '../../Models/enfermagem';
import { EnfermagemService } from '../../_services/enfermagem.service';

@Component({
  selector: 'app-lista-enf',
  standalone: true,
  imports: [],
  templateUrl: './lista-enf.component.html',
  styleUrl: './lista-enf.component.css'
})
export class ListaEnfComponent {

  enfermagem!: Enfermagem[];

  constructor(private enfermagemService : EnfermagemService){

  }

  ngOnInit(): void {
    //listarProntuarioIndividual();  
    this.getListarProntuarios();
    
  }

  getListarProntuarios(){
    this.enfermagemService.listarProntuarios().subscribe(response => this.enfermagem = response);
  }
}
