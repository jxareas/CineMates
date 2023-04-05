import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[jxClickOut]'
})
export class ClickOutDirective {

  @Output()
  outsideClick : EventEmitter<boolean> = new EventEmitter();

  constructor(private elementRef : ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement: any): void {
    const isClickInside = this.elementRef.nativeElement.contains(targetElement);
    if (!isClickInside) {
      this.outsideClick.emit(true);
    }
  }

}
