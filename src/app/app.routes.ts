import { Routes } from '@angular/router';
import { IndividualComponent } from './Prontuarios/individual/individual.component';
import { LoginComponent } from './login/login.component';
import { EnfermagemComponent } from './Prontuarios/enfermagem/enfermagem.component';
import { PsicologaComponent } from './Prontuarios/psicologa/psicologa.component';
import { NutricionistaComponent } from './Prontuarios/nutricionista/nutricionista.component';
import { FisioterapiaComponent } from './Prontuarios/fisioterapia/fisioterapia.component';
import { IndividualListaComponent } from './Lista/individual-lista/individual-lista.component';
import { ListaIndComponent } from './Lista/lista-ind/lista-ind.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes =[
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'individual', 
        component: IndividualComponent
    },
    {
        path: 'listaIndividual',
        component: ListaIndComponent
    },
    {
        path: 'enfermagem',
        component: EnfermagemComponent
    },
    {
        path: 'psicologa',
        component: PsicologaComponent
    },
    {
        path: 'nutricionista',
        component: NutricionistaComponent
    },
    {
        path: 'fisioterapia',
        component: FisioterapiaComponent
    },
    {
        path: 'listaCompleta',
        component: IndividualListaComponent
    }
];
