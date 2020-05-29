import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalesComponent } from './tales.component';

describe('TalesComponent', () => {
  let component: TalesComponent;
  let fixture: ComponentFixture<TalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
