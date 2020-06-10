import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { AdPurchaseComponent } from './ad-purchase/ad-purchase.component';



@NgModule({
  declarations: [AdPurchaseComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    TranslateModule
  ]
})
export class StoreModule { }
