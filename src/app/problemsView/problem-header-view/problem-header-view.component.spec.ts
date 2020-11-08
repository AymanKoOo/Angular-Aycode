import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHeaderViewComponent } from './problem-header-view.component';

describe('ProblemHeaderViewComponent', () => {
  let component: ProblemHeaderViewComponent;
  let fixture: ComponentFixture<ProblemHeaderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemHeaderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
