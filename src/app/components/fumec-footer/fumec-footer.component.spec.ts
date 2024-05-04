import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumecFooterComponent } from './fumec-footer.component';

describe('FumecFooterComponent', () => {
  let component: FumecFooterComponent;
  let fixture: ComponentFixture<FumecFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FumecFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FumecFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
