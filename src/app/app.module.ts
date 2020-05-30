import { TalesModule } from './tales/tales.module';
import { SamplesModule } from './samples/samples.module';
import { CollectionModule } from './collection/collection.module';
import { VPostModule } from './v-post/v-post.module';
import { StoreModule } from './store/store.module';
import { AlertModule } from './alert/alert.module';
import { CoreModule } from './core/core.module';
import { GenericModule } from './generic/generic.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericModule,
    CoreModule,
    AlertModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule,
    VPostModule,
    CollectionModule,
    SamplesModule,
    TalesModule,
    TranslateModule,
    NgDynamicBreadcrumbModule

  ],
  exports: [

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
