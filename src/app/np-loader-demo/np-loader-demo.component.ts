import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-np-loader-demo",
  templateUrl: "./np-loader-demo.component.html",
})
export class NpLoaderDemoComponent implements OnInit {
  constructor() {}

  loader1 = false;
  loader2 = false;
  loader3 = false;
  loader4 = false;

  importText = "import { NpLoaderModule } from 'np-ui-lib';";
  htmlText = '<span [npLoader]="true"></span>';

  ngOnInit(): void {}
}
