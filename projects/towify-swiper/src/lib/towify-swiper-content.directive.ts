import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[towifySwiperContent]'
})
export class TowifySwiperContentDirective {

  constructor(public templateRef: TemplateRef<unknown>) {}

}
