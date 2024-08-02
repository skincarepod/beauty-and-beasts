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

  constructor(private breedSerice: BreedService){}

  ngOnInit(){
  }
}
