import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatviewComponent } from './chatview.component';

describe('ChatviewComponent', () => {
  let component: ChatviewComponent;
  let fixture: ComponentFixture<ChatviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
