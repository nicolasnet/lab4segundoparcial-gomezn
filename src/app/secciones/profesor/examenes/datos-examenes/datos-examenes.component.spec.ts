import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosExamenesComponent } from './datos-examenes.component';

describe('DatosExamenesComponent', () => {
  let component: DatosExamenesComponent;
  let fixture: ComponentFixture<DatosExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
