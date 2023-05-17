import { TestBed } from '@angular/core/testing';

import { SaiOneLibService } from './sai-one-lib.service';

describe('SaiOneLibService', () => {
  let service: SaiOneLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaiOneLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
