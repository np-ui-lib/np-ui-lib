import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-progress-demo',
  templateUrl: './np-progress-demo.component.html',
  styleUrls: ['./np-progress-demo.component.css']
})
export class NpProgressDemoComponent implements OnInit {

  importText = 'import { NpProgressModule } from \'np-ui-lib\';';
  htmlText = '<np-progress [value]="50"></np-progress>';

  progressCount = 2;

  constructor() { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      const progress = this.progressCount * 2;
      if (progress > 100) {
        this.progressCount = 100;
        clearInterval(interval);
      } else {
        this.progressCount = progress;
      }
    }, 500);
  }

}
