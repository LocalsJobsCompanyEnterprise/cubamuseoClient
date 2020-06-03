import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VPostRoutingModule } from './v-post-routing.module';
import { ShareVpostComponent } from './share-vpost/share-vpost.component';


@NgModule({
  declarations: [ ShareVpostComponent],
  imports: [
    CommonModule,
    VPostRoutingModule
  ]
})
export class VPostModule { }
