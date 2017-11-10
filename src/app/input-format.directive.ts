import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat')  order;

  constructor(private el:ElementRef) { }

  @HostListener('click') onclick(){

    //console.log("Value: ", this.el.nativeElement);
    console.log("Order: ", this.order);
    // let value: string = this.el.nativeElement.value;
    // if(this.format == "lowercase"){
    //   this.el.nativeElement.value = value.toLowerCase();
    // }    
    // else{
    //   this.el.nativeElement.value = value.toUpperCase();
    // }
  }

}
