import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-np-utility-demo',
  templateUrl: './np-utility-demo.component.html',
  styleUrls: ['./np-utility-demo.component.css']
})
export class NpUtilityDemoComponent implements OnInit {

  constructor() { }

  text: string = "A paragraph is a series of related sentences developing a central idea, called the topic.Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.Paragraphs add one idea at a time to your broader argument.";

  firstName: string;
  lastName: string;
  birthDate: Date;
  birthTime: string;
  isActive: boolean = true;
  description: string;

  maskedValue1: string;
  maskedValue2: string;
  maskedValue3: string;

  ngOnInit(): void {

  }

}
