import { Component, NgModule, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { DogdetailsComponent } from './components/dogdetails/dogdetails.component';
import { DogfinderComponent } from './components/dogfinder/dogfinder.component';
import { HomeComponent } from './components/home/home.component';
import { MatcherComponent } from './components/matcher/matcher.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BreedService } from './services/breeds.service';
import { DogHeightPipe } from './pipes/dog-height.pipe';


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
    DogHeightPipe,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private breedService: BreedService) {}

  ngOnInit() {
    this.breedService.getAllDogBreeds();
<<<<<<< HEAD
    this.breedService.getAllDogsInfo();
    this.breedService.searchDogs("Labrador");
=======
    this.breedService.getAllDry();
>>>>>>> f34d1d504b6c6269065e7a1750027270d50829a2
  }
}
