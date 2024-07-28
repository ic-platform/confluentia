import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSiteComponent } from './manage-site.component';

describe('ManageSiteComponent', () => {
  let component: ManageSiteComponent;
  let fixture: ComponentFixture<ManageSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
