import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiSlaComponent } from './ki-sla.component';

describe('KiSlaComponent', () => {
  let component: KiSlaComponent;
  let fixture: ComponentFixture<KiSlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiSlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiSlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
