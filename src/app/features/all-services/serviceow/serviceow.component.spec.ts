import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceowComponent } from './serviceow.component';

describe('ServiceowComponent', () => {
  let component: ServiceowComponent;
  let fixture: ComponentFixture<ServiceowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
