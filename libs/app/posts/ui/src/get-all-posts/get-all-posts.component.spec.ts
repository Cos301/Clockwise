import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPostsComponent } from './get-all-posts.component';

describe('GetAllPostsComponent', () => {
  let component: GetAllPostsComponent;
  let fixture: ComponentFixture<GetAllPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllPostsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
