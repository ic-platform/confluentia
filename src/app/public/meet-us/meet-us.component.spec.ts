import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetUsComponent } from './meet-us.component';

describe('MeetUsComponent', () => {
  let component: MeetUsComponent;
  let fixture: ComponentFixture<MeetUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
