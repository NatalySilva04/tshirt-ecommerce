import { TestBed } from '@angular/core/testing';

import { TshirtCatalogService } from './tshirt-catalog.service';

describe('TshirtCatalogService', () => {
  let service: TshirtCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TshirtCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});