import { TestBed } from '@angular/core/testing';

import { ApiWorksService } from './api-works.service';

describe('ApiWorksService', () => {
  let service: ApiWorksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWorksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
