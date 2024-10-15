import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { Fisioterapia } from '../Models/fisioterapia';
import { FisioterapiaRequest } from '../Models/FisioterapiaRequest';


@Injectable({
  providedIn: 'root'
})

export class FisioterapiaService {
  onFormSubmit(model: FisioterapiaRequest) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = 'https://localhost:7292/api/Fisioterapeuta';

  constructor(private http:HttpClient) { }

    listaProntFisio(): Observable<Fisioterapia[]>{
      return this.http.get<Fisioterapia[]>(this.prontuariosUrl);
    }

    salvaProntFisio(fisioterapiaRequest: FisioterapiaRequest): Observable<FisioterapiaRequest>
    {
      console.log("Services");
      console.log(fisioterapiaRequest);
      return this.http.post<FisioterapiaRequest>(this.prontuariosUrl, fisioterapiaRequest);
    }
}
