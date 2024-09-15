import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IndividualComponent } from './Prontuarios/individual/individual.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaIndComponent } from './Lista/lista-ind/lista-ind.component';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), IndividualComponent, LoginComponent, ListaIndComponent, HttpClient, provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync()]
  
};
