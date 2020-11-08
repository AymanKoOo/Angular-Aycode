import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemContentComponent } from './problem-content.component';

describe('ProblemContentComponent', () => {
  let component: ProblemContentComponent;
  let fixture: ComponentFixture<ProblemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
