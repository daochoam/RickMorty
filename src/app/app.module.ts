import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickMortyComponent } from './modules/rick-morty/rick-morty.component';
import { LateralMenuComponent } from './core/lateral-menu/lateral-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RickMortyComponent,
    LateralMenuComponent,
  ],
  imports: [
    HttpClientModule,
    LazyLoadImageModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
