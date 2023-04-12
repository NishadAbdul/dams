import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[damsEnter]'
})
export class DamsOnEnterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup.enter', ['$event']) triggerChild(e: KeyboardEvent) {
    this.el.nativeElement.firstElementChild.click();
  }
}