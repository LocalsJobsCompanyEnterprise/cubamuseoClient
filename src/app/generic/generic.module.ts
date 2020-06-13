import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericRoutingModule } from './generic-routing.module';
import { TextComponent } from './text/text.component';
import { CategoryComponent } from './category/category.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { SectionStartComponent } from './section-start/section-start.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxSocialShareModule } from 'ngx-social-share';
import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';


@NgModule({
  declarations: [TextComponent,
    CategoryComponent,
    GalleryListComponent,
    SectionStartComponent
  ],
  imports: [
    CommonModule,
    GenericRoutingModule,
    OwlModule,
    Ng7MatBreadcrumbModule,
    NgxSocialShareModule,
    TranslateModule
  ],
  exports: [
    TextComponent,
    CategoryComponent,
    GalleryListComponent
  ]
})
export class GenericModule { }
