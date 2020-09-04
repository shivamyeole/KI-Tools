import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfdbComponent } from './sfdb.component';

describe('SfdbComponent', () => {
  let component: SfdbComponent;
  let fixture: ComponentFixture<SfdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
