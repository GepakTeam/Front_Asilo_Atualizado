import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { Individual } from '../../Models/individual';
import { IndividualService } from '../../_services/individual.service';


@Component({
    selector: 'app-lista-ind',
    standalone: true,
    templateUrl: './lista-ind.component.html',
    styleUrl: './lista-ind.component.css',
    imports: [MatCardModule, MatButtonModule, CommonModule, NavbarComponent]
})
export class ListaIndComponent implements OnInit{

  individual?: Individual[];

  constructor(private individualService : IndividualService){

  }

  ngOnInit(): void {
    //listarProntuarioIndividual();  
    this.listaProntInd();
    
  }

  listaProntInd(){
    this.individualService.listaProntInd().subscribe(response => this.individual = response);
  }
}


// listarProntuarioIndividual(): any {

  // this.individualService.listarProntuarioIndividual()
  // .subscribe({
  //   next: (response) => {
  //       this.individual = response;
  //   }
  // });
  

