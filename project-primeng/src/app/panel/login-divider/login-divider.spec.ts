import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDivider } from './login-divider';

describe('LoginDivider', () => {
  let component: LoginDivider;
  let fixture: ComponentFixture<LoginDivider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDivider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDivider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
