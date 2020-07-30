import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-dropdown-demo',
  templateUrl: './np-dropdown-demo.component.html',
  styleUrls: ['./np-dropdown-demo.component.css']
})
export class NpDropdownDemoComponent implements OnInit {

  importText = 'import { NpDropdownModule } from \'np-ui-lib\';';
  htmlText = `<np-dropdown [(ngModel)]="value" [items]="data"></np-dropdown>`;
  templateText = `<ng-template #itemTemplate let-item="item">
  <span [innerHTML]="item.name></span><span> ({{item.id}})</span>
</ng-template>`;

  constructor() { }

  data: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Graps', 'Strawberry', 'Watermelon', 'Kiwi', 'Blackberries', 'Blueberries', 'Cherries', 'Cranberries', 'Guava', 'Java-Plum', 'Lychee', 'Papaya'];
  dataFull: any[] = [
    { id: 1, name: 'Apple', vitamin: 'A, B1, B6' },
    { id: 2, name: 'Banana', vitamin: 'A, B1, B6' },
    { id: 3, name: 'Orange', vitamin: 'C, Folate, Potassium' },
    { id: 4, name: 'Mango', vitamin: 'A, C' },
    { id: 5, name: 'Grapes', vitamin: 'C' },
    { id: 6, name: 'Strawberry', vitamin: 'iron, copper, B6' },
    { id: 7, name: 'Watermelon', vitamin: ' A, B6 and C' },
    { id: 8, name: 'Kiwi', vitamin: 'C, K , E' },
    { id: 9, name: 'Blackberries', vitamin: 'Folate, Magnesium, C' },
    { id: 10, name: 'Blueberries', vitamin: 'Folate, Magnesium, C' },
    { id: 11, name: 'Cherries', vitamin: 'A and folic acid' },
    { id: 12, name: 'Cranberries', vitamin: 'C, E, and K1' },
    { id: 13, name: 'Guava', vitamin: 'C' },
    { id: 14, name: 'Java-Plum', vitamin: 'A, K' },
    { id: 15, name: 'Lychee', vitamin: 'C, B' },
    { id: 16, name: 'Papaya', vitamin: 'C and fiber' }
  ];

  dropdownVal1 = 'Mango';
  dropdownVal2: any;
  dropdownVal3: string;
  dropdownVal4 = 'Mango';
  dropdownVal5: any;
  dropdownVal6 = 'Mango';
  dropdownVal7 = 'Mango';

  ngOnInit(): void {
  }

  changeValue() {
    this.dropdownVal1 = 'Banana';
  }

  onChange(val) {
    alert(val);
  }
}
