import { TestBed } from '@angular/core/testing';

import { TshirtCartService } from './tshirt-cart.service';

describe('TshirtCartService', () => {
  let service: TshirtCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TshirtCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});