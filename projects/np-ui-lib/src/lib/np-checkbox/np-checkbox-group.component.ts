import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";

@Component({
  selector: "np-checkbox-group",
  templateUrl: "./np-checkbox-group.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NpCheckboxGroupComponent {
  private static controlCount = 1;

  // Orientation can be 'horizontal' or 'vertical'
  @Input() orientation: string = "horizontal";
  @Input()
  inputId: string = `np-checkbox-group_${NpCheckboxGroupComponent.controlCount++}`;
}
