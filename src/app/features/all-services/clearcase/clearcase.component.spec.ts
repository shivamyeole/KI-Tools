import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearcaseComponent } from './clearcase.component';

describe('ClearcaseComponent', () => {
  let component: ClearcaseComponent;
  let fixture: ComponentFixture<ClearcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
