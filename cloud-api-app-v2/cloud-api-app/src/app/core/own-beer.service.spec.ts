import { TestBed, inject } from '@angular/core/testing';

import { OwnBeerService } from './own-beer.service';

describe('OwnBeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnBeerService]
    });
  });

  it('should be created', inject([OwnBeerService], (service: OwnBeerService) => {
    expect(service).toBeTruthy();
  }));
});
