import { Component, ElementRef, ViewChild } from '@angular/core';
import { TowifySwiperComponent } from '../../../towify-swiper/src';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('swiperComponent', { read: TowifySwiperComponent, static: true })
  swiperComponent!: TowifySwiperComponent;

  swiper = [{
    background: 'red'
  }, {
    background: 'black'
  }, {
    background: 'blue'
  }, {
    background: 'yellow'
  }, {
    background: 'purple'
  }, {
    background: 'pink'
  }, {
    background: 'green'
  }]


  swiperLeft(index: number) {
    console.log('swiperLeft = ', index)
  }

  swiperRight(_: number) {
    if (this.swiper.length - this.swiperComponent.currentIndex < this.swiperComponent.MAX_VISIBLE_CONTENT_COUNT) {
      this.swiper.push({
        background: 'red'
      })
    }
  }
}
