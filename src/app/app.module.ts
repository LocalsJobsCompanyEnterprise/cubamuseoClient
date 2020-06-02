import { ItemComponent } from './generic/item/item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalesModule } from './tales/tales.module';
import { SamplesModule } from './samples/samples.module';
import { CollectionModule } from './collection/collection.module';
import { VPostModule } from './v-post/v-post.module';
import { StoreModule } from './store/store.module';
import { AlertModule } from './alert/alert.module';
import { CoreModule } from './core/core.module';
import { GenericModule } from './generic/generic.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";
import { OwlModule } from 'ngx-owl-carousel';

<<<<<<< HEAD


export function HttpLoaderFactory(http:HttpClient){
=======
export function HttpLoaderFactory(http: HttpClient) {
>>>>>>> 6ff11724a7738202d8073f08a1161bace8424d04
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
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
<<<<<<< HEAD
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
=======
    NgDynamicBreadcrumbModule,
>>>>>>> 6ff11724a7738202d8073f08a1161bace8424d04
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [
          HttpClient
        ]
      }

    }),

  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
