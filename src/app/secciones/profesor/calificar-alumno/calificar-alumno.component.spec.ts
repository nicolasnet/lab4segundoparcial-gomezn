import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarAlumnoComponent } from './calificar-alumno.component';

describe('CalificarAlumnoComponent', () => {
  let component: CalificarAlumnoComponent;
  let fixture: ComponentFixture<CalificarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
