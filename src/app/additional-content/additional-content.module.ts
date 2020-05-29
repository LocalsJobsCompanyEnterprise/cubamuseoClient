import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalContentRoutingModule } from './additional-content-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RelatedSitesComponent } from './related-sites/related-sites.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [ContactComponent, AboutUsComponent, RelatedSitesComponent, NewsComponent],
  imports: [
    CommonModule,
    AdditionalContentRoutingModule,
  ],
   exports: [
     ContactComponent,
     AboutUsComponent,
     NewsComponent,
     RelatedSitesComponent
  ]
})
export class AdditionalContentModule { }
