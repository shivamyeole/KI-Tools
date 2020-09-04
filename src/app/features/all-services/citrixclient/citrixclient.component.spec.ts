import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitrixclientComponent } from './citrixclient.component';

describe('CitrixclientComponent', () => {
  let component: CitrixclientComponent;
  let fixture: ComponentFixture<CitrixclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitrixclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitrixclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
