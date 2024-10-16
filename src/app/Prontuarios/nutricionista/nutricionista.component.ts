import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { Nutricionista } from '../../Models/nutricionista';
import { DateAdapter, MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import { NutricionistaService } from '../../_services/nutricionista.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { NutricionistaRequest } from '../../Models/NutricionistaRequest';

// Configuração dos formatos de data
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
  selector: 'app-nutricionista',
  standalone: true,
  imports: [MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterLink,
    NavbarComponent,
    FormsModule],
  templateUrl: './nutricionista.component.html',
  styleUrl: './nutricionista.component.css'
})
export class NutricionistaComponent {

  
  model: NutricionistaRequest;

  constructor(private dateAdapter: DateAdapter<Date>, 
    private nutricionistaService: NutricionistaService, 
    private router: Router
  ) {
    // Define o formato de data para o padrão brasileiro
    this.dateAdapter.setLocale('pt-BR'); 
    this.model={
      nome:   '',
      dataAvaliacao: new Date,
      idade: 0,
      dataNascimento: new Date,
      motivoConsulta:   '',
      encaminhadoPor:   '',
      convenio:   '',
      telefone:   '',
      endereco:   '',
      escolaridade:   '',
      profissao:  '',
      numeroPessoasCasa: 0,
      numeroAdulto: 0,
      numeroCrianca: 0,
      estadoCivil:  false,
      problemaSaude: false,
      qualProblemaSaude:  '',
      diabetes: false,
      hipertensao: false,
      obesidade: false,
      dislipidemia: false,
      outrosProblemas:  '',
      antecedenteDiabetes: false,
      antecedenteHipertensao: false,
      antecedenteObesidade: false,
      antecedenteDislipidemia: false,
      outrosAntecedentes:   '',
      habitoIntestinal:   '',
      caracteristicaFezes:  '',
      habitoUrinario:   '',
      horasSono: 0,
      atividadeFisica: false,
      frequenciaAtividadeFisica:  '',
      fuma: false,
      quantoFuma:   '',
      haQuantoTempoFuma:  '',
      fazUsoBebidaAlcoolica: false,
      tipoBebida:   '',
      haQuantoTempoBebida:  '',
      fazUsoLaxante: false,
      porQuantoTempoLaxante:  '',
      fazUsoMedicamento: false,
      haQuantoTempoMedicamento:   '',
      quaisMedicamentos:  '',
      intoleranciaOuAversaoAlimentar: false,
      qualIntolerancia:   '',
      haQuantoTempoIntolerancia:  '',
      controleAlimentacao: false,
      qualControleAlimentacao:  '',
      alteracaoPeso: false,
      emQuantoTempo:  '',
      consumoAgua:  '',
      consumoCafe:  '',
      consumoMensalSal:   '',
      consumoAcucar:  '',
      consumoOleoBanha:   '',
      ondeFazRefeicoes:   '',
      quemPreparaRefeicoes:   '',
      velocidadeRefeicao:   false,
      acompanhamentoRefeicao:   false,
      preferenciasAlimentares:  '',
      restricoesAlimentares:  '',

  };
  }
     ProntNutricionista(){
      console.log(this.model)
      this.nutricionistaService.salvaProntNutri(this.model)
      .subscribe({
        next:(response)=>
          this.router.navigateByUrl('https://localhost:7292/api/ProntuarioNutricionista')
      });
    }

    routerNutri(){
      this.router.navigate(['/PerfNutri']);
    }
}
