import { TestBed } from '@angular/core/testing';

import { ProductQuotesService } from './product-quotes.service';

describe('ProductQuotesService', () => {
  let service: ProductQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
