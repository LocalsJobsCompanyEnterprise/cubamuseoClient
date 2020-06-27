import { ScroollTopComponent } from './generic/scrooll-top/scrooll-top.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchModule } from './search/search.module';
import { TalesModule } from './tales/tales.module';
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
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
//import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxSocialShareModule } from 'ngx-social-share';
// import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollEventModule } from 'ngx-scroll-event';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ScroollTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    GenericModule,
    CoreModule,
    AlertModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule,
    VPostModule,
    NgxSocialShareModule,
    TalesModule,
    SearchModule,
    ScrollEventModule,
    NgbModule,
    MatTabsModule,
    // Ng7MatBreadcrumbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]

      }

    }),

  ],
  exports: [
    TranslateModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
