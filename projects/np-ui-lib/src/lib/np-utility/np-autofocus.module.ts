import { Directive, ElementRef, Input, NgModule } from "@angular/core";

@Directive({
  selector: "[npAutofocus]",
})
export class NpAutofocusDirective {
  @Input("npAutofocus")
  set autofocus(value: boolean) {
    if (value) {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, 100);
    }
  }
  constructor(private el: ElementRef) { }
}

@NgModule({
  declarations: [NpAutofocusDirective],
  exports: [NpAutofocusDirective],
})
export class NpAutofocusModule { }
