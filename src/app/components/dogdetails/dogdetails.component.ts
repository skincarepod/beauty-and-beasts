import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedService } from '../../services/breeds.service';
import { BreedInfo } from '../../services/Breeds';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { DogHeightPipe } from '../../pipes/dog-height.pipe';
import { DogAgePipe } from '../../pipes/dog-age.pipe';

@Component({
  selector: 'app-dogdetails',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressBarModule,
    DogAgePipe,
    DogHeightPipe,
  ],
  templateUrl: './dogdetails.component.html',
  styleUrl: './dogdetails.component.css'
})
export class DogdetailsComponent {
  readonly dogId: number = this.route.snapshot.params['dogId'];
  dog: BreedInfo = this.breedService.getDog(this.dogId);

  constructor(private breedService: BreedService, private readonly route: ActivatedRoute){}

  getStat(stat: any){
    return stat * 20;
  }
}
