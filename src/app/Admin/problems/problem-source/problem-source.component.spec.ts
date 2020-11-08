import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSourceComponent } from './problem-source.component';

describe('ProblemSourceComponent', () => {
  let component: ProblemSourceComponent;
  let fixture: ComponentFixture<ProblemSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
