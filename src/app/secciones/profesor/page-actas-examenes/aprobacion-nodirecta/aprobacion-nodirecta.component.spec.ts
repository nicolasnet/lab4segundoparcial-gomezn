import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionNODirectaComponent } from './aprobacion-nodirecta.component';

describe('AprobacionNODirectaComponent', () => {
  let component: AprobacionNODirectaComponent;
  let fixture: ComponentFixture<AprobacionNODirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobacionNODirectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionNODirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
