import { TestBed, inject } from '@angular/core/testing';

import { AmbtrackingService } from './ambtracking.service';

describe('AmbtrackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmbtrackingService]
    });
  });

  it('should be created', inject([AmbtrackingService], (service: AmbtrackingService) => {
    expect(service).toBeTruthy();
  }));
});
