import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MechSolutionsComponent } from './mech-solutions.component';

describe('MechSolutionsComponent', () => {
  let component: MechSolutionsComponent;
  let fixture: ComponentFixture<MechSolutionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MechSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
