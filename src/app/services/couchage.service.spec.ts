import { TestBed } from '@angular/core/testing';

import { CouchageService } from './couchage.service';

describe('CouchageService', () => {
  let service: CouchageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouchageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
