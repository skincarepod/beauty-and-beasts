import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { BreedService } from '../../services/breeds.service';
import { Breed } from '../../services/Breeds';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
 selector: 'app-dogfinder',
 standalone: true,
 imports: [
  MatButtonModule,
  MatCardModule,
  NgFor, 
  RouterModule
 ],
 templateUrl: './dogfinder.component.html',
 styleUrl: './dogfinder.component.css'
})
export class DogfinderComponent {
 allDogs: Breed[] = this.breedService.getAllDogBreeds();

 constructor(private breedService: BreedService){}

}
