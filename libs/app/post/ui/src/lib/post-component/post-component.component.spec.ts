import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponentComponent } from './post-component.component';

describe('PostComponentComponent', () => {
  let component: PostComponentComponent;
  let fixture: ComponentFixture<PostComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
