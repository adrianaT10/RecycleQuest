import { TestBed, inject } from '@angular/core/testing';

import { CentersSearchService } from './centers-search.service';

describe('CentersSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentersSearchService]
    });
  });

  it('should be created', inject([CentersSearchService], (service: CentersSearchService) => {
    expect(service).toBeTruthy();
  }));
});
