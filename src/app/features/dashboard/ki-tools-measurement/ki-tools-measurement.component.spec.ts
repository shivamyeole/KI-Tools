import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiToolsMeasurementComponent } from './ki-tools-measurement.component';

describe('KiToolsMeasurementComponent', () => {
  let component: KiToolsMeasurementComponent;
  let fixture: ComponentFixture<KiToolsMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiToolsMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiToolsMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
