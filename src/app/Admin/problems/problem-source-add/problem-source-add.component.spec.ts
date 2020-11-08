import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSourceAddComponent } from './problem-source-add.component';

describe('ProblemSourceAddComponent', () => {
  let component: ProblemSourceAddComponent;
  let fixture: ComponentFixture<ProblemSourceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSourceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
