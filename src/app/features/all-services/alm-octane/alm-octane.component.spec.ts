import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmOctaneComponent } from './alm-octane.component';

describe('AlmOctaneComponent', () => {
  let component: AlmOctaneComponent;
  let fixture: ComponentFixture<AlmOctaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmOctaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmOctaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
