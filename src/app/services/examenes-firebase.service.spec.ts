import { TestBed } from '@angular/core/testing';

import { ExamenesFirebaseService } from './examenes-firebase.service';

describe('ExamenesFirebaseService', () => {
  let service: ExamenesFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenesFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
