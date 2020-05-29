import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPurchaseComponent } from './ad-purchase.component';

describe('AdPurchaseComponent', () => {
  let component: AdPurchaseComponent;
  let fixture: ComponentFixture<AdPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
