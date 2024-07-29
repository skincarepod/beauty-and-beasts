import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap, of, map } from 'rxjs';
import { Breed, BreedInfo } from './Breeds';

@Injectable({
  providedIn: 'root'
})
export class DogsApiService {
  private sheddingOneUrl = 'https://api.api-ninjas.com/v1/dogs?shedding=1';
  private nameUrlPart = 'https://api.api-ninjas.com/v1/dogs?name=';
  private urlPart = 'https://api.api-ninjas.com/v1/dogs?';
  private allBreeds: Object[] = [];
  // private dogInfo: BreedInfo;

  constructor(private http:HttpClient) { };

  getSheddingOne(){
    this.http.get(this.sheddingOneUrl).subscribe((breeds:any) => {
      breeds.results.forEach((breeds:any)=>{
        this.allBreeds.push(breeds);
    })});
  };

  getBreed(catUrl:string|unknown){
    const fullUrl = `${this.nameUrlPart}${catUrl}`;
    return this.http.get(fullUrl);
  };

};
