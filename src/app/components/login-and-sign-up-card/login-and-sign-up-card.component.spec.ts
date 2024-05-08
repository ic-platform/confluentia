import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndSignUpCardComponent } from './login-and-sign-up-card.component';

describe('LoginAndSignUpCardComponent', () => {
  let component: LoginAndSignUpCardComponent;
  let fixture: ComponentFixture<LoginAndSignUpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAndSignUpCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAndSignUpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
