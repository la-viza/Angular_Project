import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastDetailsComponent } from './breakfast-details.component';

describe('BreakfastDetailsComponent', () => {
  let component: BreakfastDetailsComponent;
  let fixture: ComponentFixture<BreakfastDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakfastDetailsComponent]
    });
    fixture = TestBed.createComponent(BreakfastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
