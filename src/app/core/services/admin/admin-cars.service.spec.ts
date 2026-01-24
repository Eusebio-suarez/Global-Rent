import { TestBed } from '@angular/core/testing';

import { AdminCarsService } from './admin-cars.service';

describe('AdminCarsService', () => {
  let service: AdminCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
