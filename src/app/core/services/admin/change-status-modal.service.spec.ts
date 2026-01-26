import { TestBed } from '@angular/core/testing';

import { ChangeStatusModalService } from './change-status-modal.service';

describe('ChangeStatusModalService', () => {
  let service: ChangeStatusModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeStatusModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
