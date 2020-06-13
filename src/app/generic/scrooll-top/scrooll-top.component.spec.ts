import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScroollTopComponent } from './scrooll-top.component';

describe('ScroollTopComponent', () => {
  let component: ScroollTopComponent;
  let fixture: ComponentFixture<ScroollTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScroollTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScroollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
