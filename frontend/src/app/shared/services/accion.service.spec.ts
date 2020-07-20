import { TestBed } from '@angular/core/testing';

import { AccionService } from './accion.service';

describe('AccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccionService = TestBed.get(AccionService);
    expect(service).toBeTruthy();
  });
});
