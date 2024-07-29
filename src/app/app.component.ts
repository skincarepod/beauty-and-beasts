import { Component, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { MatcherComponent } from './components/matcher/matcher.component';
import { AboutComponent } from './components/about/about.component';
import { DogfinderComponent } from './components/dogfinder/dogfinder.component';
import { BreedsService } from './services/breeds.services';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,RouterLinkActive,
    MatToolbarModule,
    HomeComponent,
    AboutComponent,
    MatcherComponent,
    DogfinderComponent,

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private breedsService: BreedsService) {}

  ngOnInit() {
    this.breedsService.getAllDogBreeds();
    this.breedsService.getAllDogsInfo();
   
  }
  title = 'beautie-and-beasts';

}
