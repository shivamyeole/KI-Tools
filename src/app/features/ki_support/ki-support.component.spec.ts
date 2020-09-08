import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiSupportComponent } from './ki-support.component';

describe('KiSupportComponent', () => {
  let component: KiSupportComponent;
  let fixture: ComponentFixture<KiSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
