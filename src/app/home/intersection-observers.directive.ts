import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIntersectionObservers]',
  exportAs: 'intersection'

})
export class IntersectionObserversDirective {

  public isIntersecting: boolean;
  public IS_INTERSECTING: boolean = true;
  public IS_NOT_INTERCTING: boolean = false;
  private elementRef: ElementRef;
  private observer: IntersectionObserver | null

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.observer = null
  }

  public ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        console.log(entries)
        this.isIntersecting = entries[0].isIntersecting;
      },
      {
        rootMargin: "0px 0px 0px 0px"
      }
    );
    this.observer.observe(this.elementRef.nativeElement);

  }

}
