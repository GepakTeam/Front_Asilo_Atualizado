import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { Enfermagem } from '../../Models/enfermagem';

import { response } from 'express';
import { EnfermagemService } from '../../_services/enfermagem.service';

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-enfermagem',
  standalone: true,
  imports: [MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterLink,
    NavbarComponent,
    FormsModule],
  templateUrl: './enfermagem.component.html',
  styleUrl: './enfermagem.component.css'
})

export class EnfermagemComponent {
  model : Enfermagem;

  constructor(private enfermagemlService: EnfermagemService, private router: Router){
    this.model={
      nome: '',
      dataNascimento: new Date(),
      dataExame: new Date(),
      nivelConciencia: true,
      pupilasSituacao: true,
      pupilaPD: '',
      pupilaPE: '',
      fotorreacao: true,
      sistemaCardioCirculatorio: true,
      carotideosEsquerdo: '',
      carotideosDireito: '',
      braquiaisEsquerdo: '',
      braquiaisDireito: '',
      radiaisEsquerdo: '',
      radiaisDireito: '',
      femoraisEsquerdo: '',
      femoraisDireito: '',
      pediososEsquerdo: '',
      pediososDireito: '',
      popliteosEsquerdo: '',
      popliteosDireito: '',
      perfusaoPeriferica: true,
      edema: true,
      padrao: true,
      murmurioVesicular: true,
      expansaoTorax: true,
      ruidosAdventicios: true,
      aceitacaoDieta: true,
      denticao: true,
      abdome: true,
      rha: true,
      massa: true,
      evacuacao: true,
      genito: true,
      urina: true,
      vesical: true,
      cutanea: true,
      sensorial: true,
      umidade: true,
      atividade: true,
      mobilidade: true,
      nutricao: true,
      friccao: true,
      diagnosticosEnfermagem: true,
      controleSinaisVitaisData: new Date(),
      controleSinaisVitaisHorario: new Date(),
      controleSinaisVitaisPa: '',
      controleSinaisVitaisFc: '',
      controleSinaisVitaisFr: '',
      controleSinaisVitaisTemp: '',
      controleSinaisVitaisPvc: '',
      controleSinaisVitaisGlicemia: '',
      controleSinaisVitaisAnotacoes: '',
    }
  }

  ProntEnfermagem(){
    console.log(this.model)
    this.enfermagemlService.salvaProntEnf(this.model)
    .subscribe({
     next:(response)=>
        this.router.navigateByUrl('https://localhost:7292/api/ProntuarioEnfermagem')
    });
   }

   routerEnf(){
    this.router.navigate(['/PerfEnf']);
   }

}
