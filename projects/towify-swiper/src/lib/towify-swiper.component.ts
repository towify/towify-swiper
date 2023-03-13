import { Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, } from '@angular/core';
import { TowifySwiperContentDirective } from './towify-swiper-content.directive';
import { CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'towify-swiper',
  templateUrl: './towify-swiper.component.html',
  styleUrls: ['./towify-swiper.component.scss']
})
export class TowifySwiperComponent implements OnChanges {
  @ContentChild(TowifySwiperContentDirective)
  content?: TowifySwiperContentDirective;

  @ViewChild('swiperContainer', { read: ElementRef, static: true })
  swiperContainer!: ElementRef;

  @Input()
  data: any[] = [];

  @Input()
  maxVisibleCount = 5;

  @Output()
  swiperLeft = new EventEmitter<number>();

  @Output()
  swiperRight = new EventEmitter<number>();

  readonly #interval;
  #startX;
  #containerRect: {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  currentIndex;
  transformPercent;
  animationDirection?: 'left' | 'right';
  animationTransition = '';
  isDragging = false;

  computeDragRenderPos = () => {
    return { x: this.#containerRect.x, y: this.#containerRect.y };
  };

  constructor() {
    this.currentIndex = 0;
    this.transformPercent = 0;
    this.#startX = -1;
    this.#containerRect = {
      x: 0,
      y: 0,
      width: 1,
      height: 1
    };
    this.#interval = 0.5;
  }

  ngOnChanges(changes: SimpleChanges) {
    const { data } = changes;
    if (!data) return;
    this.currentIndex = 0;
  }

  dragStart(data: CdkDragStart) {
    if (data.event.type === 'mousemove') {
      this.#startX = (<MouseEvent>data.event).clientX;
    } else if ((<TouchEvent>data.event).touches.length === 1) {
      this.#startX = (<TouchEvent>data.event).touches[0].clientX;
    }
    const swiperContainerRect = (
      this.swiperContainer.nativeElement as HTMLElement
    ).getBoundingClientRect();
    this.#containerRect = {
      x: swiperContainerRect.x,
      y: swiperContainerRect.y,
      width: swiperContainerRect.width,
      height: swiperContainerRect.height
    };
    this.transformPercent = 0;
    this.animationTransition = '';
    this.animationDirection = undefined;
    this.isDragging = true;
  }

  dragMove(data: CdkDragMove) {
    let moveX = -1;
    if (data.event.type === 'mousemove') {
      moveX = (<MouseEvent>data.event).clientX;
    } else if ((<TouchEvent>data.event).touches.length === 1) {
      moveX = (<TouchEvent>data.event).touches[0].clientX;
    }
    if (this.#startX === -1 || moveX === -1) return;
    const translateX = moveX - this.#startX;
    this.transformPercent = parseFloat(
      (translateX / this.#containerRect.width).toFixed(2)
    );
    if (this.transformPercent > 1) this.transformPercent = 1;
    if (this.transformPercent < -1) this.transformPercent = -1;
  }

  dragEnd() {
    this.animationDirection = this.transformPercent > 0 ? 'right' : 'left';
    this.#startX = -1;
    this.transformPercent = 0;
    this.animationTransition = `all ${ this.#interval }s`;
    this.currentIndex += 1;
    this.isDragging = false;
  }

  transitionEnd() {
    if (!this.animationTransition) return;
    this.animationTransition = '';
    if (this.animationDirection === 'right') {
      this.swiperRight.emit(this.currentIndex - 1);
    } else if (this.animationDirection === 'left') {
      this.swiperLeft.emit(this.currentIndex - 1);
    }
    this.animationDirection = undefined;
  }
}
