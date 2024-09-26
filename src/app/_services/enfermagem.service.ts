import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enfermagem } from '../Models/enfermagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfermagemService {

  constructor(private http:HttpClient) {

  }

   prontuariosUrl = 'https://localhost:7292/api/ProntuarioEnfermagem';

  listarProntuarios(): Observable<Enfermagem[]>{
    return this.http.get<Enfermagem[]>(this.prontuariosUrl);
  }

  salvarProntuarios(enfermagem: Enfermagem): Observable<Enfermagem>
  {
    console.log("Services");
    console.log(enfermagem);
    return this.http.post<Enfermagem>(this.prontuariosUrl, enfermagem);
  }
}
