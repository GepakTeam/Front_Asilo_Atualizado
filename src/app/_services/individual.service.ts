import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { IndividualRequest } from '../Models/IndividualRequest';
import { Individual } from '../Models/individual';


@Injectable({
  providedIn: 'root'
})
export class IndividualService {
  onFormSubmit(model: IndividualRequest) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = 'https://localhost:7292/api/Prontuarios';

  constructor(private http:HttpClient) { }

    listarProntuarios(): Observable<Individual[]>{
      return this.http.get<Individual[]>(this.prontuariosUrl);
    }

    salvarProntuarios(individualRequest: IndividualRequest): Observable<IndividualRequest>
    {
      console.log("Services");
      console.log(individualRequest);
      return this.http.post<IndividualRequest>(this.prontuariosUrl, individualRequest);
    }

}

