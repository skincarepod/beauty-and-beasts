import { Component, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { DogdetailsComponent } from './components/dogdetails/dogdetails.component';
import { DogfinderComponent } from './components/dogfinder/dogfinder.component';
import { HomeComponent } from './components/home/home.component';
import { MatcherComponent } from './components/matcher/matcher.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BreedService } from './services/breeds.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    HomeComponent,
    AboutComponent,
    MatcherComponent,
    DogfinderComponent,
    DogdetailsComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private breedService: BreedService) {}

  ngOnInit() {
    this.breedService.getAllDogBreeds();
    this.breedService.getDog(94);
   
  }
}
