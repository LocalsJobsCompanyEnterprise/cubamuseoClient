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
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    FormsModule,
    GenericModule,
    CoreModule,
    AlertModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule,
    VPostModule,
    TalesModule,
    SearchModule,
    NgbModule,
    MatTabsModule,
    NgDynamicBreadcrumbModule,
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
