import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowifySwiperModule } from '../../../towify-swiper/src';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TowifySwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
