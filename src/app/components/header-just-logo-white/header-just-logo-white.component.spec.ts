import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJustLogoWhiteComponent } from './header-just-logo-white.component';

describe('HeaderJustLogoWhiteComponent', () => {
  let component: HeaderJustLogoWhiteComponent;
  let fixture: ComponentFixture<HeaderJustLogoWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderJustLogoWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderJustLogoWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
