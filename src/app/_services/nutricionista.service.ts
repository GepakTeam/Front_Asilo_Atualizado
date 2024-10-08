import { Injectable } from '@angular/core';
import { Fisioterapia } from '../Models/fisioterapia';
import { HttpClient } from '@angular/common/http';
import { Nutricionista } from '../Models/nutricionista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {
  onFormSubmit(model: Fisioterapia) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = '';

  constructor(private http:HttpClient) { }

    listarProntuarios(): Observable<Nutricionista[]>{
      return this.http.get<Nutricionista[]>(this.prontuariosUrl);
    }

    salvarProntuarios(nutricionista: Nutricionista): Observable<Nutricionista>
    {
      console.log("Services");
      console.log(nutricionista);
      return this.http.post<Nutricionista>(this.prontuariosUrl, nutricionista);
    }
}
