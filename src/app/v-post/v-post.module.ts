import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSocialShareModule } from 'ngx-social-share';
import { VPostRoutingModule } from './v-post-routing.module';
import { ShareVpostComponent } from './share-vpost/share-vpost.component';


@NgModule({
  declarations: [ ShareVpostComponent],
  imports: [
    CommonModule,
    NgxSocialShareModule,
    TranslateModule,
    VPostRoutingModule
  ]
})
export class VPostModule { }
