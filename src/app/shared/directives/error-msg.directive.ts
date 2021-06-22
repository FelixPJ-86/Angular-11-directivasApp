import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit , OnChanges{

  htmlElement:ElementRef<HTMLElement>
  @Input() set color(valor:string){
    this.htmlElement.nativeElement.style.color=valor; 
  }
  @Input() set mensaje(valor:string){
    this.htmlElement.nativeElement.innerText=valor
  }


  constructor(private el:ElementRef<HTMLElement>) { 
    this.htmlElement=el;
  }
  ngOnChanges(changes: SimpleChanges): void {


  }


  ngOnInit(): void {
  //  this.setColor();
  //  this.setMensaje();
  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text'); 

  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this.color; 
  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerText=this.mensaje;
  }
  


}
