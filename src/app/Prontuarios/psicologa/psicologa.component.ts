import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { Psicologa } from '../../Models/psicologa';
import { PsicologaService } from '../../_services/psicologa.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { PsicologaRequest } from '../../Models/PsicologaRequest';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-psicologa',
  standalone: true,
  imports: [MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterLink,
    NavbarComponent,
    FormsModule,
    CommonModule],
  templateUrl: './psicologa.component.html',
  styleUrl: './psicologa.component.css'
})
export class PsicologaComponent {

  ProntuarioPsicologo={
    nome:'',
    dataNascimento: new Date,
    rg: '',
    cpf: '',
    responsavel: '',
    endereco: '',
    municipio: '',
    saude: '',
    consciente: '',
    religiao: '',
    filho: '',
    qntFilho: '',
    acolhimento: '',
    historico: '',
  };


  constructor(private psicologaService: PsicologaService, 
    private router: Router){}
    
         ProntPsicologa(){
          console.log(this.ProntuarioPsicologo)
          this.psicologaService.salvaProntPsic(this.ProntuarioPsicologo)
          .subscribe({
            next:(response)=>
              this.router.navigateByUrl('https://localhost:7292/api/ProntuarioPsicologo')
          });
        }
    
        // routerPsic(){
        //   this.router.navigate(['/PerfPsic']);
        // }
}
