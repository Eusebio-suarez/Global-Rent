import { TestBed } from '@angular/core/testing';

import { AdminReservesService } from './admin-reserves.service';

describe('AdminReservesService', () => {
  let service: AdminReservesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminReservesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
