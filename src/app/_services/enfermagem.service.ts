import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnfermagemRequest } from '../Models/EnfermagemRequest';


@Injectable({
  providedIn: 'root'
})
export class EnfermagemService {
  ProntEnfermagem(model: EnfermagemRequest) {
    throw new Error('Method not implemented.');
  }

  prontuarioUrl = 'https://localhost:7292/api/ProntuarioEnfermagem';

  constructor(private http:HttpClient) { }

  listaProntEnf(): Observable<any[]> {
    return this.http.get<any[]>(this.prontuarioUrl);
  }

    // listaProntEnf(): Observable<Enfermagem[]>{
    //   return this.http.get<Enfermagem[]>(this.prontuarioUrl);
    // }

    salvaProntEnf(enfermagemRequest: EnfermagemRequest): Observable<EnfermagemRequest>
    {
      console.log("Services");
      console.log(enfermagemRequest);
      return this.http.post<EnfermagemRequest>(this.prontuarioUrl, enfermagemRequest);
    }
}