import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHeaderAddComponent } from './problem-header-add.component';

describe('ProblemHeaderAddComponent', () => {
  let component: ProblemHeaderAddComponent;
  let fixture: ComponentFixture<ProblemHeaderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemHeaderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHeaderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
