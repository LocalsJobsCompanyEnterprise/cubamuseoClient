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
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ 
    TextComponent, 
    CategoryComponent, 
    BreadcrumbComponent, 
    ItemComponent, 
    GalleryListComponent, 
    SectionStartComponent, 
    ZoomComponent],

  imports: [
    CommonModule,
    GenericRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    FormsModule,
    BrowserModule
  ],
exports: [
  TextComponent,
  CategoryComponent,
  BreadcrumbComponent,
  ReactiveFormsModule,
  ItemComponent,
  GalleryListComponent
],
entryComponents : [
  ItemComponent
]
})
export class GenericModule { }
