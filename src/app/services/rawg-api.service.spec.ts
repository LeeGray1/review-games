import { TestBed } from '@angular/core/testing';

import { RAWGApiService } from './rawg-api.service';

describe('RAWGApiService', () => {
  let service: RAWGApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RAWGApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
