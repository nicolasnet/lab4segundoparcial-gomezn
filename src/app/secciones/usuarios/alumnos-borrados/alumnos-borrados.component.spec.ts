import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosBorradosComponent } from './alumnos-borrados.component';

describe('AlumnosBorradosComponent', () => {
  let component: AlumnosBorradosComponent;
  let fixture: ComponentFixture<AlumnosBorradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosBorradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosBorradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
