import { TestBed } from '@angular/core/testing';

import { ReqRickMortyService } from './req-rick-morty.service';

describe('ReqRickMortyService', () => {
  let service: ReqRickMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqRickMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
