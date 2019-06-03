import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  currentTop: number = 0;
  currentLeft: number = 0;
  isPanning: any = false;

  @Input('ratio') parallaxRatio : number = 1

  constructor(private eleRef : ElementRef) {
    //this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event){
    // if(!this.isPanning){
      // this.isPanning = setTimeout((() => {
      //   this.isPanning = false;  
      // }).bind(this), 10);
      let top = event.clientY * this.parallaxRatio;
      let left = event.clientX * this.parallaxRatio;
      this.currentTop = top;
      this.currentLeft = left;
      this.eleRef.nativeElement.style.backgroundPosition = `${left}px ${top}px`;
    // }
  }
}