import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule} from '@angular/material/slider'

@Component({
  selector: 'app-fisioterapia',
  standalone: true,
  imports: [RouterLink, 
    NavbarComponent,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule],
  templateUrl: './fisioterapia.component.html',
  styleUrl: './fisioterapia.component.css'
})
export class FisioterapiaComponent {
  max = 10;
  min = 0;
  value = 0;
}
