import { EnviromentVariableServiceService } from './service/enviroment-variable-service.service';
import { ConfigServiceService } from './service/config-service.service';
import { AlertService } from './../alert/alert.service';
import { StoreServiceService } from './service/store-service.service';
import { VpostServiceService } from './service/vpost-service.service';
import { CollectionServiceService } from './service/collection-service.service';
import { TalesServiceService } from './service/tales-service.service';
import { SamplesServiceService } from './service/samples-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardsComponent } from './guards/guards.component';




@NgModule({
  declarations: [GuardsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    SamplesServiceService,
    TalesServiceService,
    CollectionServiceService,
    VpostServiceService,
    StoreServiceService,
    AlertService,
    ConfigServiceService,
    EnviromentVariableServiceService
  ]
})
export class CoreModule { }
