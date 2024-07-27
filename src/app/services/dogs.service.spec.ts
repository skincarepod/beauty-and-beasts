import { TestBed } from '@angular/core/testing';

import { DogsApiService } from './dogs.service';

describe('DogsService', () => {
  let service: DogsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
