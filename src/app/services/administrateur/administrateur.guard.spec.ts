import { TestBed } from '@angular/core/testing';

import { AdministrateurGuard } from './administrateur.guard';

describe('AdministrateurGuard', () => {
  let guard: AdministrateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdministrateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
