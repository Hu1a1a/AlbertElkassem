import { TestBed } from '@angular/core/testing';

import { MoneyLossService } from './money-loss.service';

describe('MoneyLossService', () => {
  let service: MoneyLossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyLossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
