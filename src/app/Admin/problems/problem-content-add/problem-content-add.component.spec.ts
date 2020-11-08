import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemContentAddComponent } from './problem-content-add.component';

describe('ProblemContentAddComponent', () => {
  let component: ProblemContentAddComponent;
  let fixture: ComponentFixture<ProblemContentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemContentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemContentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
