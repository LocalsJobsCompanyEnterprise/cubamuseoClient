import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSitesComponent } from './related-sites.component';

describe('RelatedSitesComponent', () => {
  let component: RelatedSitesComponent;
  let fixture: ComponentFixture<RelatedSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
