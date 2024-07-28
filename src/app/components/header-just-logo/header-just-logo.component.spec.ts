import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJustLogoComponent } from './header-just-logo.component';

describe('HeaderJustLogoComponent', () => {
  let component: HeaderJustLogoComponent;
  let fixture: ComponentFixture<HeaderJustLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderJustLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderJustLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
