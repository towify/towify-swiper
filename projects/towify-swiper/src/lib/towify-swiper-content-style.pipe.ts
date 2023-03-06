import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'towifySwiperContentStyle'
})
export class TowifySwiperContentStylePipe implements PipeTransform {

  transform(index: number, topIndex: number, transformPercent?: number, direction?: 'right' | 'left'): any {
    const maxZIndex = 99;
    if (index !== topIndex) {
      const elementIndex = index - Math.abs(transformPercent ?? 0) - topIndex;
      const zIndex = maxZIndex - elementIndex * 10;
      const scale = 1 - elementIndex * 0.025;
      let xOffset = 3 * elementIndex;
      return {
        gridArea: '1/1/2/2',
        opacity: elementIndex >= 0 ? 1 : 0,
        zIndex: zIndex > 0 ? zIndex : 0,
        transform: elementIndex >= 0 ? `translate3d(0px, ${ xOffset > 12 ? 12 : xOffset }%, 0px) scale(${
          scale < 0.9 ? 0.9 : scale
        })` : `translate3d(${direction === 'right' ? 100 : -100}%, 0px, 0px) rotateZ(${
          direction === 'right' ? 20 : -20
        }deg)`
      };
    }
    if (transformPercent) {
      return {
        gridArea: '1/1/2/2',
        opacity: 1,
        zIndex: maxZIndex,
        transform: `translate3d(${transformPercent * 100}%, 0px, 0px) rotateZ(${transformPercent * 20}deg)`
      }
    }
    return {
      gridArea: '1/1/2/2',
      opacity: 1,
      zIndex: maxZIndex,
      transform: 'translate3d(0px, 0px, 0px) scale(1)'
    }
  }
}
