import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowifySwiperContentDirective, TowifySwiperModule } from '../../../towify-swiper/src';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TowifySwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
