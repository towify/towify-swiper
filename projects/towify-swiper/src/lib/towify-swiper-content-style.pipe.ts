import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'towifySwiperContentStyle'
})
export class TowifySwiperContentStylePipe implements PipeTransform {
  readonly MAX_Z_INDEX = 99;
  readonly Z_INDEX_UNIT = 10;
  readonly MIN_ZOOM_OUT = 0.9
  readonly ZOOM_OUT_UNIT = 0.025;
  readonly MAX_Y_OFFSET = 12;
  readonly Y_OFFSET_UNIT = 3;
  readonly MAX_ROTATE_ANGLE = 20;
  readonly MAX_X_TRANSLATE = 100;

  transform(index: number, currentIndex: number, transformPercent?: number, direction?: 'right' | 'left'): any {
    if (index !== currentIndex) {
      const elementIndex = index - Math.abs(transformPercent ?? 0) - currentIndex;
      const zIndex = this.MAX_Z_INDEX - elementIndex * this.Z_INDEX_UNIT;
      const scale = 1 - elementIndex * this.ZOOM_OUT_UNIT;
      const yOffset = this.Y_OFFSET_UNIT * elementIndex;
      return {
        gridArea: '1/1/2/2',
        opacity: elementIndex >= 0 ? 1 : 0,
        zIndex: zIndex > 0 ? zIndex : 0,
        transform: elementIndex >= 0 ? `translate3d(0px, ${ yOffset > this.MAX_Y_OFFSET ? this.MAX_Y_OFFSET : yOffset }%, 0px) scale(${
          scale < this.MIN_ZOOM_OUT ? this.MIN_ZOOM_OUT : scale
        })` : `translate3d(${direction === 'right' ? this.MAX_X_TRANSLATE : (0 - this.MAX_X_TRANSLATE)}%, 0px, 0px) rotateZ(${
          direction === 'right' ? this.MAX_ROTATE_ANGLE : (0 - this.MAX_ROTATE_ANGLE)
        }deg)`
      };
    }
    if (transformPercent) {
      return {
        gridArea: '1/1/2/2',
        opacity: 1,
        zIndex: this.MAX_Z_INDEX,
        transform: `translate3d(${transformPercent * 100}%, 0px, 0px) rotateZ(${transformPercent * this.MAX_ROTATE_ANGLE}deg)`
      }
    }
    return {
      gridArea: '1/1/2/2',
      opacity: 1,
      zIndex: this.MAX_Z_INDEX,
      transform: 'translate3d(0px, 0px, 0px) scale(1)'
    }
  }
}
