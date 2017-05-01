import { TestBed, inject } from '@angular/core/testing';

import { SpotyfyApiService } from './spotyfy-api.service';

describe('SpotyfyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotyfyApiService]
    });
  });

  it('should ...', inject([SpotyfyApiService], (service: SpotyfyApiService) => {
    expect(service).toBeTruthy();
  }));
});
