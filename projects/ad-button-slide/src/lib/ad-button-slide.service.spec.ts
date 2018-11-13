import { TestBed } from '@angular/core/testing';

import { AdButtonSlideService } from './ad-button-slide.service';

describe('AdButtonSlideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdButtonSlideService = TestBed.get(AdButtonSlideService);
    expect(service).toBeTruthy();
  });
});
