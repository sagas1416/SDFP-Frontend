import { TestBed } from '@angular/core/testing';

import { PapeleriaService } from './papeleria.service';

describe('PapeleriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PapeleriaService = TestBed.get(PapeleriaService);
    expect(service).toBeTruthy();
  });
});
