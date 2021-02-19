import { TestBed } from '@angular/core/testing';

import { PieStatusService } from './pie-status.service';

describe('PieStatusService', () => {
  let service: PieStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
