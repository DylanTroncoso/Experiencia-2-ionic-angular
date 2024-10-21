import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { example1Guard } from './example1.guard';

describe('example1Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => example1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
