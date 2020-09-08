import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireTeamComponent } from './entire-team.component';

describe('EntireTeamComponent', () => {
  let component: EntireTeamComponent;
  let fixture: ComponentFixture<EntireTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntireTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
