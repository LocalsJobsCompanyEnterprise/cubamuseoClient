import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericRoutingModule } from './generic-routing.module';
import { TextComponent } from './text/text.component';
import { CategoryComponent } from './category/category.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ItemComponent } from './item/item.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { SectionStartComponent } from './section-start/section-start.component';
import { ZoomComponent } from './zoom/zoom.component';
import { OwlModule } from 'ngx-owl-carousel'

@NgModule({
  declarations: [TextComponent, CategoryComponent, BreadcrumbComponent, ItemComponent, GalleryListComponent, SectionStartComponent, ZoomComponent],
  imports: [
    CommonModule,
    GenericRoutingModule,
    OwlModule
  ],
  exports: [
    TextComponent,
    CategoryComponent,
    BreadcrumbComponent,
    ItemComponent,
    GalleryListComponent
  ]
})
export class GenericModule { }
