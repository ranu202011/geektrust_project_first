import { TestBed } from '@angular/core/testing';

import { TrustTableService } from './trust-table.service';

describe('TrustTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrustTableService = TestBed.get(TrustTableService);
    expect(service).toBeTruthy();
  });
});
