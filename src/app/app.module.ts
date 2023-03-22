import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image'
import { NgOptimizedImage } from '@angular/common'
import { InfiniteScrollModule } from "ngx-infinite-scroll";

// Angular Material
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LateralMenuComponent } from './shared/lateral-menu/lateral-menu.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RickMortyComponent } from './modules/RickMorty/pages/rick-morty/rick-morty.component';
import { ModalDataComponent } from './modules/RickMorty/component/modal-data/modal-data.component';
import { ViewEpisodeComponent } from './modules/RickMorty/component/view-episode/view-episode.component';


@NgModule({
  declarations: [
    AppComponent,
    RickMortyComponent,
    ModalDataComponent,
    ViewEpisodeComponent,
    LateralMenuComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    LazyLoadImageModule,
    InfiniteScrollModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

    // Angular Material
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
  ],

  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
