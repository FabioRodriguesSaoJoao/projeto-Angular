import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.color = 'darkblue';
    elementRef.nativeElement.style.backgroundColor = 'white';
    console.log(elementRef.nativeElement); 
  }

}
