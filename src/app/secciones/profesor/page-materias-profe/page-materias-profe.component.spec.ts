import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMateriasProfeComponent } from './page-materias-profe.component';

describe('PageMateriasProfeComponent', () => {
  let component: PageMateriasProfeComponent;
  let fixture: ComponentFixture<PageMateriasProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMateriasProfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMateriasProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
