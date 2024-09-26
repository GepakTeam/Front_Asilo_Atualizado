import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { Psicologa } from '../Models/psicologa';


@Injectable({
  providedIn: 'root'
})
export class PsicologaService {
  onFormSubmit(model: Psicologa) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = 'https://localhost:7292/api/ProntuarioPsicologo';

  constructor(private http:HttpClient) { }

    listarProntuarios(): Observable<Psicologa[]>{
      return this.http.get<Psicologa[]>(this.prontuariosUrl);
    }

    salvarProntuarios(psicologa: Psicologa): Observable<Psicologa>
    {
      console.log("Services");
      console.log(psicologa);
      return this.http.post<Psicologa>(this.prontuariosUrl, psicologa);
    }

}

