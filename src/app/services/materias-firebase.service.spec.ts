import { TestBed } from '@angular/core/testing';

import { MateriasFirebaseService } from './materias-firebase.service';

describe('MateriasFirebaseService', () => {
  let service: MateriasFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriasFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
