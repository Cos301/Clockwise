import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InChatComponent } from './in-chat.component';

describe('InChatComponent', () => {
  let component: InChatComponent;
  let fixture: ComponentFixture<InChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
