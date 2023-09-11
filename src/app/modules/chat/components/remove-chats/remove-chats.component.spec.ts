import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveChatsComponent } from './remove-chats.component';

describe('RemoveChatsComponent', () => {
  let component: RemoveChatsComponent;
  let fixture: ComponentFixture<RemoveChatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveChatsComponent]
    });
    fixture = TestBed.createComponent(RemoveChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
