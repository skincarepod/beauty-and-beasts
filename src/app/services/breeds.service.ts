import { Injectable } from '@angular/core';
import { Observable, Subject, tap, of, map } from 'rxjs';
import { BreedsInfo, Breeds } from './Breeds';

import * as dogs from '../utils/dogs.json';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  private dogsjson = JSON.parse(JSON.stringify(dogs));

  getAllDogsInfo() {
    let allBreeds: BreedsInfo[] = [];
    for (let i = 0; i < this.dogsjson.default.length; i++) {
      allBreeds.push(
        {
          image_link: this.dogsjson.default[i].image_link,
          good_with_children: this.dogsjson.default[i].good_with_children,
          good_with_other_dogs: this.dogsjson.default[i].good_with_other_dogs,
          shedding: this.dogsjson.default[i].shedding,
          coat_length: this.dogsjson.default[i].coat_length,
          trainability: this.dogsjson.default[i].trainability,
          barking: this.dogsjson.default[i].barking,
          min_life_expectancy: this.dogsjson.default[i].min_life_expectancy,
          max_life_expectancy: this.dogsjson.default[i].max_life_expectancy,
          max_height_male: this.dogsjson.default[i].max_height_male,
          max_height_female: this.dogsjson.default[i].max_height_female,
          max_weight_male: this.dogsjson.default[i].max_weight_male,
          max_weight_female: this.dogsjson.default[i].max_weight_female,
          min_height_male: this.dogsjson.default[i].min_height_male,
          min_height_female: this.dogsjson.default[i].min_height_female,
          min_weight_male: this.dogsjson.default[i].min_weight_male,
          min_weight_female: this.dogsjson.default[i].min_weight_female,
          grooming: this.dogsjson.default[i].grooming,
          drooling: this.dogsjson.default[i].drooling,
          good_with_strangers: this.dogsjson.default[i].good_with_strangers,
          playfulness: this.dogsjson.default[i].playfulness,
          protectiveness: this.dogsjson.default[i].protectiveness,
          energy: this.dogsjson.default[i].energy,
          name: this.dogsjson.default[i].name,
        })
    };
    return allBreeds;
  }

  getAllDogBreeds() {
    let allBreeds: Breeds[] = [];
    for (let i = 0; i < this.dogsjson.default.length; i++) {
      allBreeds.push(this.dogsjson.default[i].name);
    };
    return allBreeds.sort();
  }
}
