import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesGalleryComponent } from './samples-gallery.component';

describe('SamplesGalleryComponent', () => {
  let component: SamplesGalleryComponent;
  let fixture: ComponentFixture<SamplesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
