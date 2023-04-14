import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LoginModule } from './login.module';

describe('Login Form', () => {
  let login: LoginModule;
  let fixture: ComponentFixture<LoginModule>;
  let de: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModule);
    login = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it("Should create", ()=>{
    expect(login).toBeTruthy();
  })
});
