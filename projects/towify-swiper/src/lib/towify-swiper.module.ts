import { NgModule } from '@angular/core';
import { TowifySwiperComponent } from './towify-swiper.component';
import { TowifySwiperContentDirective } from './towify-swiper-content.directive';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TowifySwiperContentStylePipe } from './towify-swiper-content-style.pipe';


@NgModule({
  declarations: [TowifySwiperComponent, TowifySwiperContentDirective, TowifySwiperContentStylePipe],
  imports: [
    BrowserModule,
    CommonModule,
    DragDropModule
  ],
  exports: [TowifySwiperComponent, TowifySwiperContentDirective]
})
export class TowifySwiperModule { }
