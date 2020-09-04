import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearquestComponent } from './clearquest.component';

describe('ClearquestComponent', () => {
  let component: ClearquestComponent;
  let fixture: ComponentFixture<ClearquestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearquestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
