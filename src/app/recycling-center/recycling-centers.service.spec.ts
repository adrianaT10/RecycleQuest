import { TestBed, inject } from '@angular/core/testing';

import { RecyclingCentersService } from './recycling-centers.service';

describe('RecyclingCentersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecyclingCentersService]
    });
  });

  it('should be created', inject([RecyclingCentersService], (service: RecyclingCentersService) => {
    expect(service).toBeTruthy();
  }));
});
