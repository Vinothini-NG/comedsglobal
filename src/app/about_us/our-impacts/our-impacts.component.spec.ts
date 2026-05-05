import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OurImpactsComponent } from './our-impacts.component';

describe('OurImpactsComponent', () => {
  let component: OurImpactsComponent;
  let fixture: ComponentFixture<OurImpactsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OurImpactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurImpactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
