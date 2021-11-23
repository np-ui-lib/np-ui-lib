import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { NpAutoCompleteComponent } from "np-ui-lib";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-np-auto-complete-demo",
  templateUrl: "./np-auto-complete-demo.component.html",
})
export class NpAutoCompleteDemoComponent implements OnInit {
  importText = "import { NpAutoCompleteModule } from 'np-ui-lib';";
  htmlText = `<np-auto-complete [(ngModel)]="value" [searchResult]="searchResult" (onSearch)="onSearchName($event)">
</np-auto-complete>`;
  templateText = `<ng-template #itemTemplateRef let-item="item" let-keyword="keyword">
  <span [innerHTML]="item.name | npHighlight : keyword"></span>
  <span> ({{item.age}})</span>
</ng-template>`;
  onSearchText = `onSearchName(keyword: string) {
    ...Search data
    this.searchResult.next(searchData);
}`;

  @ViewChild("input1", { static: true }) input1: NpAutoCompleteComponent;

  constructor() { }

  data: string[] = [
    "Maria",
    "Ana",
    "Antonio",
    "Thomas",
    "Christina",
    "Hanna",
    "Frédérique",
    "Martín",
    "Laurence",
    "Elizabeth",
    "Victoria",
    "Patricio",
    "Francisco",
    "Yang",
    "Pedro",
    "Elizabeth",
    "Sven",
    "Janine",
    "Ann",
    "Roland",
    "Aria",
    "Diego",
    "Martine",
    "Peter",
    "Carine",
    "Paolo",
    "Lino",
    "Eduardo",
    "José",
    "André",
    "Howard",
    "Manuel",
    "Mario",
    "Carlos",
    "Yoshi",
    "Patricia",
    "Helen",
    "Philip",
    "Daniel",
    "Annette",
    "Yoshi",
    "John",
    "Renate",
    "Jaime",
    "Carlos",
    "Felipe",
    "Fran",
    "Giovanni",
    "Catherine",
    "Jean",
    "Alexander",
    "Simon",
    "Yvonne",
    "Rene",
    "Henriette",
    "Marie",
    "Guillermo",
    "Georg",
    "Isabel",
    "Bernardo",
    "Lúcia",
    "Horst",
    "Sergio",
    "Paula",
    "Maurizio",
    "Janete",
    "Michael",
    "Alejandra",
    "Jonas",
    "Jose",
    "Hari",
    "Jytte",
    "Dominique",
    "Art",
    "Pascale",
    "Liz",
    "Liu",
    "Karin",
    "Miguel",
    "Anabela",
    "Helvetius",
    "Palle",
    "Mary",
    "Paul",
    "Rita",
    "Pirkko",
    "Paula",
    "Karl",
    "Matti",
    "Zbyszek",
  ];
  dataFull: any[] = [
    { id: 1, name: "Maria", age: 28 },
    { id: 2, name: "Karl", age: 6 },
    { id: 3, name: "Jose", age: 41 },
    { id: 4, name: "Yoshi", age: 8 },
    { id: 5, name: "Jonas", age: 9 },
    { id: 6, name: "Hari", age: 18 },
    { id: 7, name: "Karl", age: 33 },
    { id: 8, name: "Daniel", age: 18 },
    { id: 9, name: "Yvonne", age: 27 },
    { id: 10, name: "John", age: 26 },
    { id: 11, name: "Mario", age: 53 },
    { id: 12, name: "Martine", age: 65 },
    { id: 13, name: "Jean", age: 12 },
    { id: 14, name: "Marie", age: 46 },
    { id: 15, name: "Paula", age: 60 },
    { id: 16, name: "Paul", age: 69 },
    { id: 17, name: "Frédérique", age: 34 },
    { id: 18, name: "Aria", age: 64 },
    { id: 19, name: "Pedro", age: 31 },
    { id: 20, name: "Janete", age: 36 },
  ];

  auto1 = "Maria";
  searchResult1: BehaviorSubject<string[]> = new BehaviorSubject(null);

  auto2 = "Maria";
  searchResult2: BehaviorSubject<string[]> = new BehaviorSubject(null);

  auto3: string;
  searchResult3: BehaviorSubject<string[]> = new BehaviorSubject(null);

  auto4: string;
  searchResult4: BehaviorSubject<string[]> = new BehaviorSubject(null);

  auto5: string;
  searchResult5: BehaviorSubject<string[]> = new BehaviorSubject(null);

  auto6: string;
  searchResult6: BehaviorSubject<string[]> = new BehaviorSubject(null);

  auto7: any;
  searchResult7: BehaviorSubject<any[]> = new BehaviorSubject(null);

  auto8: any = "Maria";
  searchResult8: BehaviorSubject<any[]> = new BehaviorSubject(null);
  @ViewChild("itemTemplateRef", { static: true })
  itemTemplateRef: TemplateRef<any>;

  auto9: any;
  searchResult9: BehaviorSubject<any[]> = new BehaviorSubject(null);

  auto10: any;
  searchResult10: BehaviorSubject<any[]> = new BehaviorSubject(null);

  auto11: any;
  searchResult11: BehaviorSubject<any[]> = new BehaviorSubject(null);

  auto12: any;
  searchResult12: BehaviorSubject<any[]> = new BehaviorSubject(null);

  ngOnInit(): void { }
  onSearch1(keyword: string) {
    setTimeout(() => {
      console.log("Call for Search1");
      const searchData = this.data.filter((element) => element.indexOf(keyword) > -1);
      this.searchResult1.next(searchData);
    }, 1000);
  }
  onSearch2(keyword: string) {
    setTimeout(() => {
      const searchData = this.data.filter((element) => element.indexOf(keyword) > -1);
      this.searchResult2.next(searchData);
    }, 1000);
  }
  onSearch3(keyword: string) {
    setTimeout(() => {
      const searchData = this.data.filter((element) => element.indexOf(keyword) > -1);
      this.searchResult3.next(searchData);
    }, 1000);
  }
  onSearch4(keyword: string) {
    setTimeout(() => {
      const searchData = this.data.filter((element) => element.indexOf(keyword) > -1);
      this.searchResult4.next(searchData);
    }, 1000);
  }
  onChange4(event) {
    alert(event);
  }
  onSearch5(keyword: string) {
    setTimeout(() => {
      const searchData = this.data.filter((element) => element.indexOf(keyword) > -1);
      this.searchResult5.next(searchData);
    }, 1000);
  }
  onSearch6(keyword: string) {
    setTimeout(() => {
      const searchData = this.data.filter((element) => element.indexOf(keyword) > -1);
      this.searchResult6.next(searchData);
    }, 1000);
  }
  onSearch7(keyword: string) {
    setTimeout(() => {
      const searchData = this.dataFull.filter((element) => {
        if (element.name.indexOf(keyword) > -1) {
          return element;
        }
      });
      this.searchResult7.next(searchData);
    }, 1000);
  }
  onSearch8(keyword: string) {
    setTimeout(() => {
      const searchData = this.dataFull.filter((element) => {
        if (element.name.indexOf(keyword) > -1) {
          return element;
        }
      });
      this.searchResult8.next(searchData);
    }, 1000);
  }
  onSearch9(keyword: string) {
    setTimeout(() => {
      const searchData = this.dataFull.filter((element) => {
        if (element.name.indexOf(keyword) > -1) {
          return element;
        }
      });
      this.searchResult9.next(searchData);
    }, 1000);
  }
  onSearch10(keyword: string) {
    setTimeout(() => {
      const searchData = this.dataFull.filter((element) => {
        if (element.name.indexOf(keyword) > -1) {
          return element;
        }
      });
      this.searchResult10.next(searchData);
    }, 1000);
  }
  onSearch11(keyword: string) {
    setTimeout(() => {
      const searchData = this.dataFull.filter((element) => {
        if (element.name.indexOf(keyword) > -1) {
          return element;
        }
      });
      this.searchResult11.next(searchData);
    }, 1000);
  }
  onSearch12(keyword: string) {
    setTimeout(() => {
      const searchData = this.dataFull.filter((element) => {
        if (element.name.indexOf(keyword) > -1) {
          return element;
        }
      });
      this.searchResult12.next(searchData);
    }, 1000);
  }

  onTabChange($event) {
    if ($event.title === "Examples") {
      setTimeout(() => {
        this.input1.focus();
      }, 100);
    }
  }
}
