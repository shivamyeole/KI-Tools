import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppscanComponent } from './appscan.component';

describe('AppscanComponent', () => {
  let component: AppscanComponent;
  let fixture: ComponentFixture<AppscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
