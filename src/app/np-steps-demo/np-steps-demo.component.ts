import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-np-steps-demo',
  templateUrl: './np-steps-demo.component.html'
})
export class NpStepsDemoComponent implements OnInit {

  importText = 'import { NpStepsModule } from \'np-ui-lib\';';
  htmlText = `<np-steps>
  <np-step label="Personal Info">
    ...
  <np-step>
  ...
</np-steps>`;
  previousBtnText = `<button type="button" class="np-btn" npStepPrevious>Previous</button>`;
  nextBtnText = `<button type="button" class="np-btn" npStepNext>Next</button>`;

  personal = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });
  address = new FormGroup({
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required)
  });
  photos = new FormGroup({
    images: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
