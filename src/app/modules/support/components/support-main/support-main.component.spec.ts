import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportMainComponent } from './support-main.component';

describe('SupportMainComponent', () => {
  let component: SupportMainComponent;
  let fixture: ComponentFixture<SupportMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportMainComponent]
    });
    fixture = TestBed.createComponent(SupportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
