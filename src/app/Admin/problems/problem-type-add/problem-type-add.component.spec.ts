import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTypeAddComponent } from './problem-type-add.component';

describe('ProblemTypeAddComponent', () => {
  let component: ProblemTypeAddComponent;
  let fixture: ComponentFixture<ProblemTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
