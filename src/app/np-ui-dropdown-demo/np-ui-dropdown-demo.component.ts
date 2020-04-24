import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-ui-dropdown-demo',
  templateUrl: './np-ui-dropdown-demo.component.html',
  styleUrls: ['./np-ui-dropdown-demo.component.css']
})
export class NpUiDropdownDemoComponent implements OnInit {

  data: string[] = ["Apple", "Banana", "Orange", "Mango", "Graps", "Strawberry", "Watermelon", "Kiwi", "Blackberries", "Blueberries", "Cherries", "Cranberries", "Guava", "Java-Plum", "Lychee", "Papaya",];
  dataFull: any[] = [
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Mango", id: 4 },
    { name: "Graps", id: 5 },
    { name: "Strawberry", id: 6 },
    { name: "Watermelon", id: 7 },
    { name: "Kiwi", id: 8 },
    { name: "Blackberries", id: 9 },
    { name: "Blueberries", id: 10 },
    { name: "Cherries", id: 11 },
    { name: "Cranberries", id: 12 },
    { name: "Guava", id: 13 },
    { name: "Java-Plum", id: 14 },
    { name: "Lychee", id: 15 },
    { name: "Papaya", id: 16 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  dropdownVal1: string = "Mango";
  dropdownVal2: any;
  dropdownVal3: string;
  dropdownVal4: string = "Mango";;
  dropdownVal5: any;
  dropdownVal6: string = "Mango";
  dropdownVal7: string = "Mango";

  changeValue() {
    this.dropdownVal1 = "Banana";
  }

  onChange(val) {
    alert(val);
  }
}
