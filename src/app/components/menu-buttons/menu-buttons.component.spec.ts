import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtonsComponent } from './menu-buttons.component';

describe('MenuButtonsComponent', () => {
  let component: MenuButtonsComponent;
  let fixture: ComponentFixture<MenuButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
