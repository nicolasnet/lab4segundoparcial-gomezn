import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCrearMateriaComponent } from './page-crear-materia.component';

describe('PageCrearMateriaComponent', () => {
  let component: PageCrearMateriaComponent;
  let fixture: ComponentFixture<PageCrearMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCrearMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCrearMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
