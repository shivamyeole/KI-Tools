import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectCreationComponent } from './new-project-creation.component';

describe('NewProjectCreationComponent', () => {
  let component: NewProjectCreationComponent;
  let fixture: ComponentFixture<NewProjectCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
