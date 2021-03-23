import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-button-demo',
  templateUrl: './np-button-demo.component.html'
})
export class NpButtonDemoComponent implements OnInit {

  basicButton = `<div class="np-btn-group">
  <button class="np-btn">Normal</button>
  <button class="np-btn np-btn-primary">Primary</button>
  <button class="np-btn np-btn-success">Success</button>
  <button class="np-btn np-btn-danger">Error</button>
  <button class="np-btn np-btn-warning">Warning</button>
  <button class="np-btn np-btn-info">Info</button>
</div>`;
  smallButton = `<div class="np-btn-group">
  <button class="np-btn np-btn-sm">Normal</button>
  <button class="np-btn np-btn-primary np-btn-sm">Primary</button>
  <button class="np-btn np-btn-success np-btn-sm">Success</button>
  <button class="np-btn np-btn-danger np-btn-sm">Error</button>
  <button class="np-btn np-btn-warning np-btn-sm">Warning</button>
  <button class="np-btn np-btn-info np-btn-sm">Info</button>
</div>`;
  iconButton = `<div class="np-btn-group">
  <button class="np-btn-icon"><i class="fa fa-bars"></i></button>
  <button class="np-btn-icon np-btn-primary"><i class="fa fa-home"></i></button>
  <button class="np-btn-icon np-btn-success"><i class="fa fa-camera"></i></button>
  <button class="np-btn-icon np-btn-danger"><i class="fa fa-trash"></i></button>
  <button class="np-btn-icon np-btn-warning"><i class="fa fa-bell"></i></button>
  <button class="np-btn-icon np-btn-info"><i class="fa fa-user"></i></button>
</div>

<div class="np-btn-group">
  <button class="np-btn np-btn-success">Success<i class="fa fa-save np-btn-icon-right"></i></button>
  <button class="np-btn np-btn-danger"><i class="fa fa-trash np-btn-icon-left"></i>Error</button>
</div>`;
  constructor() { }

  ngOnInit(): void {
  }

}
