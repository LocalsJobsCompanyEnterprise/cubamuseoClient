import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesGalleryComponent } from './samples-gallery/samples-gallery.component';



@NgModule({
  declarations: [ SamplesGalleryComponent],
  imports: [
    CommonModule
  ]
})
export class SamplesModule { }
