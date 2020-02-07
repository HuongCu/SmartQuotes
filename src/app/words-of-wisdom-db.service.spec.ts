import { TestBed } from '@angular/core/testing';

import { WordsOfWisdomDbService } from './words-of-wisdom-db.service';

describe('WordsOfWisdomDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsOfWisdomDbService = TestBed.get(WordsOfWisdomDbService);
    expect(service).toBeTruthy();
  });
});
