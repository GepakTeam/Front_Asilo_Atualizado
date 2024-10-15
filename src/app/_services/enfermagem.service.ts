import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enfermagem } from '../Models/enfermagem';
import { Observable } from 'rxjs';
import { EnfermagemRequest } from '../Models/EnfermagemRequest';


@Injectable({
  providedIn: 'root'
})
export class EnfermagemService {
  onFormSubmit(model: EnfermagemRequest) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = 'https://localhost:7292/api/ProntuarioEnfermagem';

  constructor(private http:HttpClient) { }

    listaProntEnf(): Observable<Enfermagem[]>{
      return this.http.get<Enfermagem[]>(this.prontuariosUrl);
    }

    salvaProntEnf(enfermagemRequest: EnfermagemRequest): Observable<EnfermagemRequest>
    {
      console.log("Services");
      console.log(enfermagemRequest);
      return this.http.post<EnfermagemRequest>(this.prontuariosUrl, enfermagemRequest);
    }
}