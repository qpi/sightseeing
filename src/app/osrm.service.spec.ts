import { TestBed, inject } from '@angular/core/testing';

import { OsrmService } from './osrm.service';

describe('OsrmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsrmService]
    });
  });

  it('should be created', inject([OsrmService], (service: OsrmService) => {
    expect(service).toBeTruthy();
  }));
});
