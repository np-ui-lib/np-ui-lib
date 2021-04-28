import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-np-toolbar-demo",
  templateUrl: "./np-toolbar-demo.component.html",
})
export class NpToolbarDemoComponent implements OnInit {
  toolbarCode = `<div class="np-toolbar">
  <div class="np-toolbar-item">...</div>
  <div class="np-toolbar-item">...</div>
  <div class="np-toolbar-separator"></div>
  ...
  <div class="np-toolbar-spacer"></div>
  <div class="np-toolbar-item">...</div>
  <div class="np-toolbar-item">...</div>
</div>`;

  constructor() {}

  ngOnInit(): void {}
}
