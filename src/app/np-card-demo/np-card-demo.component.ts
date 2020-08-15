import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-card-demo',
  templateUrl: './np-card-demo.component.html',
  styleUrls: ['./np-card-demo.component.css']
})
export class NpCardDemoComponent implements OnInit {

  importText = `import { NpCardModule } from \'np-ui-lib\';`;
  htmlText = `<np-card>
  <np-card-header>
    Header...
  </np-card-header>
  <np-card-image>
    <img src="../../assets/images/test1.jpg"/>
  </np-card-image>
  <np-card-body>
    Body content...
  </np-card-body>
  <np-card-footer>
    Footer...
  </np-card-footer>
</np-card>`;

  constructor() { }

  ngOnInit(): void {
  }

}
