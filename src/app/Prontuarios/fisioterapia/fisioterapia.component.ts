import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Fisioterapia } from '../../Models/fisioterapia';
import { FisioterapiaService } from '../../_services/fisioterapia.service';

@Component({
  selector: 'app-fisioterapia',
  standalone: true,
  imports: [
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterLink,
    NavbarComponent,
    FormsModule
  ],
  templateUrl: './fisioterapia.component.html',
  styleUrls: ['./fisioterapia.component.css'],
})
export class FisioterapiaComponent {

  fisio: Fisioterapia;

  constructor(
    private fisioterapiaService: FisioterapiaService,
    private router: Router
  ) {
    this.fisio = {
      dataAvaliacao: new Date(),
      nome: '',
      sexo: true, 
      idade: '',
      prontuario: '', 
      dataNascimento: new Date(),
      estadoCivil: true,
      telefone: '',
      endereco: '',
      examesComplementares: '',
      medicamentos: '',
      diagnosticoClinicoPatologico: '',
      queixaPrincipal: '',
      hma: '',
      avd: '',
      aparelhoLocomotor: '',
      aparelhoCardioRespiratorio: '',
      aparelhoCardioVascular: '',
      ginecologico: '',
      outros: '',
      dificuldadeComunicacao: true,
      tipoMedicamento: '',
      dosagem: '',
      frequencia: '',
      remedioSemPrescricao: '',
      habilidadeManusear: '',
      frequenciaRefeicoes: '',
      dietaEspecial: '',
      ingestaoAlcool: '',
      ingestaoHidrica: '',
      usaProtese: true,
      apetite: true,
      porqueApetite: '',
      demencia: '',
      escalaDepressao: '',
      estadoEmocional: '',
      peso: '',
      altura: '',
      pa: '',
      auscultaCardiaca: '',
      frequenciaCardiaca: '',
      auscultaPulmonar: '',
      frequenciaRespiratoria: '',
      padraoRespiratorio: '',
      ombroFlexaoVR: '',
      ombroFlexaoAdmDireito: '',
      ombroFlexaoAdmEsquerdo: '',
      ombroExtensaoVR: '',
      ombroExtensaAdmDireito: '',
      ombroExtensaAdmEsquerdo: '',
      ombroAducaoVR: '',
      ombroAducaoAdmDireito: '',
      ombroAducaoAdmEsquerdo: '',
      ombroAbducaoVR: '',
      ombroAbducaoAdmDireito: '',
      ombroAbducaoAdmEsquerdo: '',
      ombroRotInternaVR: '',
      ombroRotInternaAdmDireito: '',
      ombroRotInternaAdmEsquerdo: '',
      ombroRotExternaVR: '',
      ombroRotExternaAdmDireito: '',
      ombroRotExternaAdmEsquerdo: '',
      cotoveloFlexaoVR: '',
      cotoveloFlexaoAdmDireito: '',
      cotoveloFlexaoAdmEsquerdo: '',
      cotoveloExtensaoVR: '',
      cotoveloExtensaoAdmDireito: '',
      cotoveloExtensaoAdmEsquerdo: '',
      punhoExtensaoVR: '',
      punhoExtensaoAdmDireito: '',
      punhoExtensaoAdmEsquerdo: '',
      punhoFlexaoVR: '',
      punhoFlexaoAdmDireito: '',
      punhoFlexaoAdmEsquerdo: '',
      punhoDesvioUlnarVR: '',
      punhoDesvioUlnarAdmDireito: '',
      punhoDesvioUlnarAdmEsquerdo: '',
      punhoDesvioRadialVR: '',
      punhoDesvioRadialAdmDireito: '',
      punhoDesvioRadialAdmEsquerdo: '',
      quadrilFlexaoVR: '',
      quadrilFlexaoAdmDireito: '',
      quadrilFlexaoAdmEsquerdo: '',
      quadrilExtensaoVR: '',
      quadrilExtensaoAdmDireito: '',
      quadrilExtensaoAdmEsquerdo: '',
      quadrilAducaoVR: '',
      quadrilAducaoAdmDireito: '',
      quadrilAducaoAdmEsquerdo: '',
      quadrilAbducaoVR: '',
      quadrilAbducaoAdmDireito: '',
      quadrilAbducaoAdmEsquerdo: '',
      quadrilRotInternaVR: '',
      quadrilRotInternaAdmDireito: '',
      quadrilRotInternaAdmEsquerdo: '',
      quadrilRotExternaVR: '',
      quadrilRotExternaAdmDireito: '',
      quadrilRotExternaAdmEsquerdo: '',
      joelhoFlexaoVR: '',
      joelhoFlexaoAdmDireito: '',
      joelhoFlexaoAdmEsquerdo: '',
      joelhoExtensaoVR: '',
      joelhoExtensaoAdmDireito: '',
      joelhoExtensaoAdmEsquerdo: '',
      tornozeloEversaoVR: '',
      tornozeloEversaoAdmDireito: '',
      tornozeloEversaoAdmEsquerdo: '',
      tornozeloDorsiflexaoVR: '',
      tornozeloDorsiflexaoAdmDireito: '',
      tornozeloDorsiflexaoAdmEsquerdo: '',
      tornozeloFlexaoPlantarVR: '',
      tornozeloFlexaoPlantarAdmDireito: '',
      tornozeloFlexaoPlantarAdmEsquerdo: '',
      tornozeloInversaoVR: '',
      tornozeloInversaoAdmDireito: '',
      tornozeloInversaoAdmEsquerdo: '',
      tempoQuedas: '',
      frequenciaQuedas: '',
      localQuedas: '',
      reflexo: true,
      equilibrioSentado: '',
      equilibrioEmPe: '',
      equilibrioSinalRosemberg: '',
      atividadeVidaDiaria: '',
      escalaDor: '',
      regiaoDor: '',
      peSagital: '',
      peFrontal: '',
      joelhoSagital: '',
      joelhoFrontal: '',
      cinturaPelvicaSagital: '',
      cinturaPelvicaFrontal: '',
      colunaSagital: '',
      colunaFrontal: '',
      cinturaEscapularSagital: '',
      cinturaEscapularFrontal: '',
      cabecaSagital: '',
      cabecaFrontal: '',
      avaliacaoMarcha: '',
      observacoes: '',
      diagnosticoFuncional: '',
      objetivosFisioterapicos: '',
    };
  }

  fisioterapia() {
      this.fisioterapiaService.salvarProntuarios(this.fisio).subscribe({
      next: (response) => {
        alert('Idoso Cadastrado');
        this.router.navigate(['/listaFisioterapia']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar', err);
        alert('Erro ao cadastrar idoso.');
      },
    });
  }

  fisioterapiaCadastro() {
    // Código futuro para cadastro específico.
  }
}
