import { TestBed } from '@angular/core/testing';

import { TshirtCartApiService } from './tshirt-cart-api.service';

describe('TshirtCartApiService', () => {
  let service: TshirtCartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TshirtCartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); 