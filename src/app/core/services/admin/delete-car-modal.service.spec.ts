import { TestBed } from '@angular/core/testing';

import { DeleteCarModalService } from './delete-car-modal.service';

describe('DeleteCarModalService', () => {
  let service: DeleteCarModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCarModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
