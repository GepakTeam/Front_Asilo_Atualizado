import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { MatDateFormats } from '@angular/material/core';

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-enfermagem',
  standalone: true,
  imports: [RouterLink, 
    NavbarComponent,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule],
  templateUrl: './enfermagem.component.html',
  styleUrl: './enfermagem.component.css'
})

export class EnfermagemComponent {

}
