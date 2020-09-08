import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketGuidelinesComponent } from './ticket-guidelines.component';

describe('TicketGuidelinesComponent', () => {
  let component: TicketGuidelinesComponent;
  let fixture: ComponentFixture<TicketGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
