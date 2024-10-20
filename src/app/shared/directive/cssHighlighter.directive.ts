import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
  selector:'[basicCss]'

})
export class cssHighlighter implements OnInit{
constructor(
  // we create property and it holds the reference of where we bind the directive
  private _eleRef :ElementRef
){

}

ngOnInit(): void {
    console.log(this._eleRef.nativeElement)//it gives DOM then we will apply css on that
    this._eleRef.nativeElement.style.backgroundColor = "green"
    this._eleRef.nativeElement.style.color = "white"
    this._eleRef.nativeElement.style.padding = "20px"
}
}


