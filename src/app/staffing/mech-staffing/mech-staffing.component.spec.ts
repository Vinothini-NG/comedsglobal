import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MechStaffingComponent } from './mech-staffing.component';

describe('MechStaffingComponent', () => {
  let component: MechStaffingComponent;
  let fixture: ComponentFixture<MechStaffingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MechStaffingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
