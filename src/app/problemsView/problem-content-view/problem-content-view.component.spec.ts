import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemContentViewComponent } from './problem-content-view.component';

describe('ProblemContentViewComponent', () => {
  let component: ProblemContentViewComponent;
  let fixture: ComponentFixture<ProblemContentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemContentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
