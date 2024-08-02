import { Component, NgModule, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { MatcherComponent } from './components/matcher/matcher.component';
import { AboutComponent } from './components/about/about.component';
import { DogfinderComponent } from './components/dogfinder/dogfinder.component';
import { BreedService } from './services/breeds.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive,
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
  constructor(private breedService: BreedService) {}

  ngOnInit() {
    this.breedService.getAllDogBreeds();
    this.breedService.getAllDogsInfo();
   
  }
}
