import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap, of, map } from 'rxjs';
import Breeds from '../Breeds';
import * as dotenv from "dotenv";

dotenv.config();

const api = process.env.apiKey;


@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private url = 'https://api.api-ninjas.com/v1/dogs?grooming=1&shedding=1'
  private allBreeds: Object[] = [];


  constructor(private http:HttpClient) { }

  private refreshBreeds() {
    this.http.get(this.url).subscribe((breeds:any) => {
      breeds.results.forEach((breeds:any)=>{
        this.allBreeds.push(breeds)
    })})
  }

  getBreeds() {
    this.refreshBreeds();
    return this.allBreeds
  }

  getBreed(url:string){
    return this.http.get(url)
  }

}