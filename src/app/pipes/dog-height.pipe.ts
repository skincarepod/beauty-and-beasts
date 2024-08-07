import { Pipe, PipeTransform } from '@angular/core';
import { BreedInfo } from '../services/Breeds';

@Pipe({
  name: 'dogHeight',
  standalone: true
})
export class DogHeightPipe implements PipeTransform {
  transform(breedInfo: BreedInfo): string {
    const minMale = breedInfo.min_height_male;
    const maxMale = breedInfo.max_height_male;
    const minFemale = breedInfo.min_height_female;
    const maxFemale = breedInfo.max_height_female;
    const breed = breedInfo.name;
    if (minMale === minFemale && maxFemale === maxMale) {
        if (minMale === maxFemale) {
            return `Male and female ${breed}s can grow to be as large as ${minFemale} inches.`;
        };
        return `Male and female ${breed}s can grow to be as small as ${minMale} inches and as large as ${maxFemale} inches.`;
    } else {
        return `Male ${breed}s can grow to be as small as ${minMale} and as large as ${maxMale} while female ${breed}s can grow to be as small as ${minFemale} and as large as ${maxFemale}.`;
    };
  }
}