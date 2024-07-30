import { Component, OnInit } from '@angular/core';
import { BreedService } from '../../services/breeds.service';
import { Breed, BreedInfo } from '../../services/Breeds';

@Component({
  selector: 'app-dogdetails',
  standalone: true,
  imports: [],
  templateUrl: './dogdetails.component.html',
  styleUrl: './dogdetails.component.css'
})
export class DogdetailsComponent {
  private example: BreedInfo = {
    image_link: 'https://api-ninjas.com/images/dogs/afghan_hound.jpg', 
    good_with_children: 3, 
    good_with_other_dogs: 3, 
    shedding: 1, 
    coat_length: 1, 
    trainability: 1, 
    barking: 3, 
    min_life_expectancy: 12, 
    max_life_expectancy: 18, 
    max_height_male: 27, 
    max_height_female: 27, 
    max_weight_male: 60, 
    max_weight_female: 60, 
    min_height_male: 25, 
    min_height_female: 25, 
    min_weight_male: 50, 
    min_weight_female: 50, 
    grooming: 4, 
    drooling: 1, 
    good_with_strangers: 3, 
    playfulness: 3, 
    protectiveness: 3, 
    energy: 4, 
    name: 'Afghan Hound'
  }

  constructor(private breedSerice: BreedService){}

  ngOnInit(){
  }
}
