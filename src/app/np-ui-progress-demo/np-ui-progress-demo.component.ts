import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-ui-progress-demo',
  templateUrl: './np-ui-progress-demo.component.html',
  styleUrls: ['./np-ui-progress-demo.component.css']
})
export class NpUiProgressDemoComponent implements OnInit {

  progressCount: number = 2;

  constructor() { }

  ngOnInit(): void {
    var interval = setInterval(() => {
      var progress = this.progressCount * 2;
      if (progress > 100) {
        this.progressCount = 100;
        clearInterval(interval);
      } else {
        this.progressCount = progress;
      }
    }, 500);
  }

}
