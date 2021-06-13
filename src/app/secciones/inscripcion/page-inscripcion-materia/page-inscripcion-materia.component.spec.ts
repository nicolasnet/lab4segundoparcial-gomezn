import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInscripcionMateriaComponent } from './page-inscripcion-materia.component';

describe('PageInscripcionMateriaComponent', () => {
  let component: PageInscripcionMateriaComponent;
  let fixture: ComponentFixture<PageInscripcionMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInscripcionMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInscripcionMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
