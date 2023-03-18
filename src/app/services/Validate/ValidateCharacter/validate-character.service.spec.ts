import { TestBed } from '@angular/core/testing';

import { ValidateCharacterService } from './validate-character.service';

describe('ValidateCharacterService', () => {
  let service: ValidateCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
