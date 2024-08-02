import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import {HttpClientModule} from '@angular/common/http';

import { DogsApiService } from './dogs.service';

describe('DogsService', () => {
  let dogsApiService: DogsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogsApiService]
    });
    dogsApiService = TestBed.inject(DogsApiService);
  });

  it('should be created', () => {
    expect(dogsApiService).toBeTruthy();
  });
});
