import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionDirectaComponent } from './aprobacion-directa.component';

describe('AprobacionDirectaComponent', () => {
  let component: AprobacionDirectaComponent;
  let fixture: ComponentFixture<AprobacionDirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobacionDirectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionDirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
