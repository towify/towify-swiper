import { Component, ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';


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
    background: 'white'
  }, {
    background: 'green'
  }]
}
