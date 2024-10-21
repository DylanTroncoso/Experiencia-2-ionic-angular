import { TestBed } from '@angular/core/testing';

import { CrudClasesService } from './crud-clases.service';

describe('CrudClasesService', () => {
  let service: CrudClasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudClasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
