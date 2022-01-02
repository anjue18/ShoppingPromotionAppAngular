import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[popup-host]',
})
export class PopupHostDirective {
  //public viewContainerRef: ViewContainerRef

  constructor(public viewContainerRef: ViewContainerRef) { 
    //this.viewContainerRef = vieContainerRef;
  }
}