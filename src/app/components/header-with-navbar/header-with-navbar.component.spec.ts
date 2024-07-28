import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithNavbarComponent } from './header-with-navbar.component';

describe('HeaderWithNavbarComponent', () => {
  let component: HeaderWithNavbarComponent;
  let fixture: ComponentFixture<HeaderWithNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWithNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWithNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
