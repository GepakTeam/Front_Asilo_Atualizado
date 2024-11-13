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
import { formatDate } from '@angular/common';

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
  ProntuarioEnfermagem={
    nome: '',
    dataNascimento: '',
    dataExame: '',
    nivelConciencia: '',
    pupilasSituacao: '',
    pupilaPD: '',
    pupilaPE: '',
    fotorreacao: '',
    sistemaCardioCirculatorio: '',
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
    perfusaoPeriferica: '',
    edema: '',
    padrao: '',
    murmurioVesicular: '',
    expansaoTorax: '',
    ruidosAdventicios: '',
    aceitacaoDieta: '',
    denticao: '',
    abdome: '',
    rha: '',
    massa: '',
    evacuacao: '',
    genito: '',
    urina: '',
    vesical: '',
    cutanea: '',
    sensorial: '',
    umidade: '',
    atividade: '',
    mobilidade: '',
    nutricao: '',
    friccao: '',
    diagnosticosEnfermagem: '',
    controleSinaisVitaisData: '',
    controleSinaisVitaisHorario: '',
    controleSinaisVitaisPa: '',
    controleSinaisVitaisFc: '',
    controleSinaisVitaisFr: '',
    controleSinaisVitaisTemp: '',
    controleSinaisVitaisPvc: '',
    controleSinaisVitaisGlicemia: '',
    controleSinaisVitaisAnotacoes: '',
  }
  

  constructor(private enfermagemService: EnfermagemService, private router: Router){ }

  ProntEnfermagem(){
    
    console.log(this.ProntuarioEnfermagem)
    this.enfermagemService.salvaProntEnf(this.ProntuarioEnfermagem)
    .subscribe({
     next:()=>
        this.router.navigateByUrl('https://localhost:7292/api/ProntuarioEnfermagem')
    });
   }
   

  //  routerEnf(){
  //   this.router.navigate(['/PerfEnf']);
  //  }

}
