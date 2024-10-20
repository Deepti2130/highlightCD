import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCssRendrer]'
})
export class CssRendrerDirective implements OnInit{
@Input() hovercolor ! :string;
@Input() defaultcolor! :string;

@HostBinding('style.backgroundColor') bgColor:string = this.defaultcolor
  constructor(
    private _eleRef:ElementRef,
    private _rendrer:Renderer2

    //it is class and also to create instance
  ) { }


  ngOnInit(): void {
    //we use rendere coz rendrer can not expose
      // this._rendrer.setStyle(this._eleRef.nativeElement, "backgroundColor", "pink")
      // this._rendrer.setStyle(this._eleRef.nativeElement, "font-weight", "bold")
      // this._rendrer.setStyle(this._eleRef.nativeElement, "padding", "30px")
  }

  //method decorator to bind the event
  @HostListener('mouseover')
   onMouseover(){
    // this._rendrer.setStyle(this._eleRef.nativeElement, "backgroundColor", this.hovercolor)
    // this._rendrer.setStyle(this._eleRef.nativeElement, "color", "#000")
    // this._rendrer.setStyle(this._eleRef.nativeElement, "padding", "30px")
    this.bgColor = this.hovercolor
   }

   @HostListener('mouseout')
   onMouseout(){
    // this._rendrer.setStyle(this._eleRef.nativeElement, "backgroundColor", "blue")
    // this._rendrer.setStyle(this._eleRef.nativeElement, "color", "white")
    // this._rendrer.setStyle(this._eleRef.nativeElement, "padding", "5px")
    this.bgColor = this.defaultcolor
   }

}
