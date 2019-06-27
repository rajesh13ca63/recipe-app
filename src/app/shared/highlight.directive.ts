/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  bgColor = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

    @HostListener('click', ['$event'])
    changeBackground(): void {
        if (!this.bgColor) {
           this.backgroundColor('red');
        }
    }

    private highlight(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }

    private backgroundColor(background: string) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background', background);
    }
}
