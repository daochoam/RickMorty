import { TestBed } from '@angular/core/testing';

import { ReqEpisodesService } from './req-episodes.service';

describe('ReqEpisodesService', () => {
  let service: ReqEpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqEpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
