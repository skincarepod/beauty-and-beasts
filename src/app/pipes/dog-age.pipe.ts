import { Pipe, PipeTransform } from '@angular/core';
import { BreedInfo } from '../services/Breeds';

@Pipe({
  name: 'dogAge',
  standalone: true
})
export class DogAgePipe implements PipeTransform {

  transform(breedInfo: BreedInfo): string {
    const minAge = breedInfo.min_life_expectancy;
    const maxAge = breedInfo.max_life_expectancy;
    const breed = breedInfo.name;
    if (minAge === maxAge) {
      return `${breed}s, on average, grow to be ${minAge} years old.`;
    }
    return `${breed}s, on average, grow to be ${minAge} - ${maxAge} years old.`;
  }

}
