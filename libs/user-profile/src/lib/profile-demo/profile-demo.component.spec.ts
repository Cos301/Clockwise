import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDemoComponent } from './profile-demo.component';

describe('ProfileDemoComponent', () => {
  let component: ProfileDemoComponent;
  let fixture: ComponentFixture<ProfileDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
