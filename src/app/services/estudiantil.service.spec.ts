import { TestBed } from '@angular/core/testing';

import { EstudiantilService } from './estudiantil.service';

describe('EstudiantilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstudiantilService = TestBed.get(EstudiantilService);
    expect(service).toBeTruthy();
  });
});
