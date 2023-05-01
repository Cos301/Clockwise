import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewChatComponent } from './create-new-chat.component';

describe('CreateNewChatComponent', () => {
  let component: CreateNewChatComponent;
  let fixture: ComponentFixture<CreateNewChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
