import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenCanAnswerComponent } from './when-can-answer.component';

describe('WhenCanAnswerComponent', () => {
  let component: WhenCanAnswerComponent;
  let fixture: ComponentFixture<WhenCanAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhenCanAnswerComponent]
    });
    fixture = TestBed.createComponent(WhenCanAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
