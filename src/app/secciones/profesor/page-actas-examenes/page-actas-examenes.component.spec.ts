import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActasExamenesComponent } from './page-actas-examenes.component';

describe('PageActasExamenesComponent', () => {
  let component: PageActasExamenesComponent;
  let fixture: ComponentFixture<PageActasExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageActasExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActasExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
