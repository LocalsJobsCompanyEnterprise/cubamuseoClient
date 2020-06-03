import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareVpostComponent } from './share-vpost.component';

describe('ShareVpostComponent', () => {
  let component: ShareVpostComponent;
  let fixture: ComponentFixture<ShareVpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareVpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareVpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
