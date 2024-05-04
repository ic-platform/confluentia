import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegisterComponent } from './course-register.component';

describe('CourseRegisterComponent', () => {
  let component: CourseRegisterComponent;
  let fixture: ComponentFixture<CourseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
