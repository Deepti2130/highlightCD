import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective {

  constructor(
    private _eleRef :ElementRef

  ) { }

  @HostListener('keyup',['$event'])
  onkeyup(eve:Event){
  //  let val = (this._eleRef.nativeElement.value as string).toLowerCase();
  //  console.log(val)

  //  this._eleRef.nativeElement.value = val;

  let inputcontrol = (eve.target as HTMLInputElement)
  let val:string = inputcontrol.value.toLowerCase()
  console.log(val)

  inputcontrol.value = val;
  }




}
