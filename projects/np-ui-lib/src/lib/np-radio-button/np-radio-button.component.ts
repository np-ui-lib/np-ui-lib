import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'np-radio-button',
  template: '',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpRadioButtonComponent implements AfterViewInit {
  static controlCount = 1;
  focused = false;

  @Input() label: string;
  @Input() value: any;
  @Input() inputId = `np-radio-button_${NpRadioButtonComponent.controlCount++}`;

  ngAfterViewInit() {
    if (!this.value) {
      throw new EvalError('The [value] property is required!');
    }
    if (!this.label) {
      throw new EvalError('The [label] property is required!');
    }
  }
}
