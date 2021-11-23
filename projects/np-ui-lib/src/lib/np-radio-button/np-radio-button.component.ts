import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "np-radio-button",
  template: "",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpRadioButtonComponent implements AfterViewInit {
  private static controlCount = 1;

  @Input() label: string;
  @Input() value: any;
  @Input() inputId: string = `np-radio-button_${NpRadioButtonComponent.controlCount++}`;

  focused: boolean = false;

  ngAfterViewInit(): void {
    if (!this.value) {
      throw new EvalError("The [value] property is required!");
    }
    if (!this.label) {
      throw new EvalError("The [label] property is required!");
    }
  }
}
