import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { Fisioterapia } from '../Models/fisioterapia';


@Injectable({
  providedIn: 'root'
})
export class FisioterapiaService {
  onFormSubmit(model: Fisioterapia) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = 'https://localhost:7292/api/Fisioterapeuta';

  constructor(private http:HttpClient) { }

    listarProntuarios(): Observable<Fisioterapia[]>{
      return this.http.get<Fisioterapia[]>(this.prontuariosUrl);
    }

    salvarProntuarios(fisioterapia: Fisioterapia): Observable<Fisioterapia>
    {
      console.log("Services");
      console.log(fisioterapia);
      return this.http.post<Fisioterapia>(this.prontuariosUrl, fisioterapia);
    }

}

