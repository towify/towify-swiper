import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  swiperRight(index: number) {
    console.log('swiperRight = ', index)
  }
}
