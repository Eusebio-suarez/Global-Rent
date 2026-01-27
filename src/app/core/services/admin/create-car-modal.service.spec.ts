import { TestBed } from '@angular/core/testing';

import { CreateCarModalService } from './create-car-modal.service';

describe('CreateCarModalService', () => {
  let service: CreateCarModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCarModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
