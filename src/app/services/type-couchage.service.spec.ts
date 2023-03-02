import { TestBed } from '@angular/core/testing';

import { TypeCouchageService } from './type-couchage.service';

describe('TypeCouchageService', () => {
  let service: TypeCouchageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCouchageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
