import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetUsComponent } from './meet-us.component';

describe('MeetUsComponent', () => {
  let component: MeetUsComponent;
  let fixture: ComponentFixture<MeetUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetUsComponent]
    });
    fixture = TestBed.createComponent(MeetUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
