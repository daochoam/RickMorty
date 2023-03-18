import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image'
import { InfiniteScrollModule } from "ngx-infinite-scroll";

// Angular Material
import {MatSelectModule} from '@angular/material/select';

import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickMortyComponent } from './modules/rick-morty/rick-morty.component';
import { LateralMenuComponent } from './core/lateral-menu/lateral-menu.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RickMortyComponent,
    LateralMenuComponent,
  ],
  imports: [
    HttpClientModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

    // Angular Material
    MatSelectModule,
     BrowserAnimationsModule,
  ],
  exports: [
    MatSelectModule
  ],

  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
