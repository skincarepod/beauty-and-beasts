import { TestBed } from '@angular/core/testing';

import { Breed } from './Breeds'
import { BreedService } from './breeds.service';

describe('BreedsService', () => {
  let breedService: BreedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    breedService = TestBed.inject(BreedService);
  });

  it('should be created', () => {
    expect(breedService).toBeTruthy();
  });

  it('returns all dogs names', () => {
    // save data called from service
    const getAllBreeds = breedService.getAllDogBreeds();

    // access data at the start of the array
    expect(getAllBreeds[3]).toEqual('Akita' as unknown as Breed);

    // access the last element in the array 
    expect(getAllBreeds[getAllBreeds.length - 1]).toEqual('Yorkshire Terrier' as unknown as Breed);
  });

  it('returns all dogs and their info', () => {
    const getAll = breedService.getAllDogsInfo();
    expect(getAll[0]).toEqual({
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
    })
    expect(getAll[getAll.length - 1]).toEqual({
      "image_link": "https://api-ninjas.com/images/dogs/czechoslovakian_vlcak.jpg",
          "good_with_children": 1,
          "good_with_other_dogs": 1,
          "shedding": 5,
          "grooming": 2,
          "drooling": 3,
          "coat_length": 1,
          "good_with_strangers": 3,
          "playfulness": 3,
          "protectiveness": 5,
          "trainability": 3,
          "energy": 3,
          "barking": 3,
          "min_life_expectancy": 10.0,
          "max_life_expectancy": 15.0,
          "max_height_male": 25.5,
          "max_height_female": 25.5,
          "max_weight_male": 66.0,
          "max_weight_female": 57.0,
          "min_height_male": 23.5,
          "min_height_female": 23.5,
          "min_weight_male": 66.0,
          "min_weight_female": 57.0,
          "name": "Czechoslovakian Vlcak"
    })
  });
});
