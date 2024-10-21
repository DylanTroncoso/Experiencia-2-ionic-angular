import { TestBed } from '@angular/core/testing';

import { CrudAlumnosService } from './crud-alumnos.service';

describe('CrudAlumnosService', () => {
  let service: CrudAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
