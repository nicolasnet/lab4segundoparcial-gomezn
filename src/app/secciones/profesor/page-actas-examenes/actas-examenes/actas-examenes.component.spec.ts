import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActasExamenesComponent } from './actas-examenes.component';

describe('ActasExamenesComponent', () => {
  let component: ActasExamenesComponent;
  let fixture: ComponentFixture<ActasExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActasExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActasExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
