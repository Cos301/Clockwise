import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTestComponent } from './profile-test.component';

describe('ProfileTestComponent', () => {
  let component: ProfileTestComponent;
  let fixture: ComponentFixture<ProfileTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
