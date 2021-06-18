import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExamenesComponent } from './page-examenes.component';

describe('PageExamenesComponent', () => {
  let component: PageExamenesComponent;
  let fixture: ComponentFixture<PageExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
