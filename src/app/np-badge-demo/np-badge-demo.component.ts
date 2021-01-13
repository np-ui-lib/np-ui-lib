import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-badge-demo',
  templateUrl: './np-badge-demo.component.html'
})
export class NpBadgeDemoComponent implements OnInit {

  badgeText = `<span class="np-badge">Basic</span>
<span class="np-badge np-badge-primary">Priamry</span>
<span class="np-badge np-badge-success">Success</span>
<span class="np-badge np-badge-danger">Error</span>
<span class="np-badge np-badge-warning">Warning</span>
<span class="np-badge np-badge-info">Info</span>`;

  constructor() { }

  ngOnInit(): void {
  }

}
