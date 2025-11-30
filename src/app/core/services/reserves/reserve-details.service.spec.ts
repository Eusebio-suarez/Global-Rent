import { TestBed } from '@angular/core/testing';

import { ReserveDetailsService } from './reserve-details.service';

describe('ReserveDetailsService', () => {
  let service: ReserveDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
