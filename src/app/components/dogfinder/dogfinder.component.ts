import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import * as dogsData from '../../utils/dogs.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BreedInfo, Breed } from '../../services/Breeds';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-dogfinder',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatIconButton,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl:'./dogfinder.component.html',
  styleUrl: './dogfinder.component.css'
  
})
export class DogfinderComponent {
 private dogsjson = JSON.parse(JSON.stringify(dogsData));
 
  //filteredDogs: SearchDogs[] = [];
  //searchText: string = 'Labrador';
  searchText: string = "";


  ngOnInit() {
   // this.filteredDogs = this.dogsjson;
//this.search(this.searchText)
this.search("")
  }
  // search(searchText: string) {
  //   const lowerCaseSearchTerm = searchText.toLowerCase();
  //   const filteredDogs = dogsData.filter(dog =>
  //     dog.name.toLowerCase().includes(lowerCaseSearchTerm)
  //   );
  //   console.log(filteredDogs);
  //   // Use filteredDogs in your component logic (e.g., display them)
  // }
  search(searchText: string) {
    let allBreeds: Breed[] = [];
    const lowerCaseSearchTerm = searchText.toLowerCase();
    for (let i = 0; i < this.dogsjson.default.length; i++) {
      if (this.dogsjson.default[i].name.toLowerCase().includes(lowerCaseSearchTerm)){
      allBreeds.push({
               name: this.dogsjson.default[i].name,
               index: i,
               image: this.dogsjson.default[i].image_link
              });
      }
    };
    console.log(allBreeds)
    return allBreeds
    // getAllDogBreeds() {
    //   let allBreeds: Breed[] = [];
    //   for (let i = 0; i < this.dogsjson.default.length; i++) {
    //     allBreeds.push(
    //       {
    //         name: this.dogsjson.default[i].name,
    //         index: i,
    //         image: this.dogsjson.default[i].image_link
    //       }
    //     );
    //   };
    //   return allBreeds.sort((a: Breed, b: Breed) => a.name.localeCompare(b.name));
    // }

   // const dogNames: string[] = this.dogsjson.filter(dog => dog.name);
   // const filteredDogs = allBreeds.filter(dog => dog.name.toLowerCase().includes(lowerCaseSearchTerm));
   // console.log(filteredDogs);
   // return this.dogsjson.filter(breed => breed.toLowerCase().includes(this.searchText.toLowerCase()));

    // Use filteredDogs
  }

// import { NgFor } from '@angular/common';
// import { BreedService } from '../../services/breeds.service';
// import { Breed } from '../../services/Breeds';

// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { RouterModule } from '@angular/router';

// @Component({
//  selector: 'app-dogfinder',
//  standalone: true,
//  imports: [
//   MatButtonModule,
//   MatCardModule,
//   NgFor, 
//   RouterModule
//  ],
//  templateUrl: './dogfinder.component.html',
//  styleUrl: './dogfinder.component.css'
// })
// export class DogfinderComponent {
//  allDogs: Breed[] = this.breedService.getAllDogBreeds();

//  constructor(private breedService: BreedService){}

 }
