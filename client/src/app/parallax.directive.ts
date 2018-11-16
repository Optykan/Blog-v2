import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  currentTop: number = 0;
  currentLeft: number = 0;

  @Input('ratio') parallaxRatio : number = 1

  constructor(private eleRef : ElementRef) {
    //this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("document:mousemove", ["$event"])
  onWindowScroll(event){
  	let top = event.clientY * this.parallaxRatio;
    let left = event.clientX * this.parallaxRatio;
    this.currentTop = top;
    this.currentLeft = left;
    this.eleRef.nativeElement.style.backgroundPosition = `${left}px ${top}px`;
  }
}