import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from "./components/nav/nav.component";
import { BreedsService } from './services/breeds.services';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    NavComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private breedsService: BreedsService) {}

  ngOnInit() {
    this.breedsService.getAllDogsBreeds();
   
  }
  title = 'beautie-and-beasts';

}
