import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HPALMComponent } from './hpalm.component';

describe('HPALMComponent', () => {
  let component: HPALMComponent;
  let fixture: ComponentFixture<HPALMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HPALMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HPALMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
