import { TestBed, inject } from '@angular/core/testing';

import { TosterserviceService } from './tosterservice.service';

describe('TosterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TosterserviceService]
    });
  });

  it('should be created', inject([TosterserviceService], (service: TosterserviceService) => {
    expect(service).toBeTruthy();
  }));
});
