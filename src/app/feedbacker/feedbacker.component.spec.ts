import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackerComponent } from './feedbacker.component';

describe('FeedbackerComponent', () => {
  let component: FeedbackerComponent;
  let fixture: ComponentFixture<FeedbackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
