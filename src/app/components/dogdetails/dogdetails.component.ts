import { Component, OnInit } from '@angular/core';
import { BreedService } from '../../services/breeds.service';
import { Breed, BreedInfo } from '../../services/Breeds';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar'

const selectedBreed: Breed = {
  name: 'Akita',
  index: 94
};

@Component({
  selector: 'app-dogdetails',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressBarModule,
  ],
  templateUrl: './dogdetails.component.html',
  styleUrl: './dogdetails.component.css'
})
export class DogdetailsComponent {
  dog = this.breedService.getDog(selectedBreed.index);

  constructor(private breedService: BreedService){}

  ngOnInit(){
  this.breedService.getDog(selectedBreed.index);
  }

  getStat(stat: any){
    return stat * 20;
  }
}
