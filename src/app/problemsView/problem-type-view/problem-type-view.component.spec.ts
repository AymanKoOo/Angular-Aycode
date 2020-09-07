import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTypeViewComponent } from './problem-type-view.component';

describe('ProblemTypeViewComponent', () => {
  let component: ProblemTypeViewComponent;
  let fixture: ComponentFixture<ProblemTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemTypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
