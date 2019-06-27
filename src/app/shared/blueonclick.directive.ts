import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appBlueOnClick]'
})
export class BlueOnClickDirective {
    bgColor = false;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }
    @HostListener('click', ['$event'])
    changeBackground(): void {
        if (!this.bgColor) {
            this.bgColor = true;
            this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red');
        } else {
            this.bgColor = false;
            this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'white');
        }
    }
}
