import { Component, TemplateRef, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource, DataTypes, Column } from 'projects/np-ui-lib/src/public-api';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout-grid',
  templateUrl: './layout-grid.component.html',
  styleUrls: ['layout-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutGridComponent implements OnInit {

  gridColumns: any[];
  gridDataSource: BehaviorSubject<DataSource>;

  @ViewChild("actionButtonsTemplate", { static: true }) actionButtonsTemplate: TemplateRef<any>;
  @ViewChild("birthDateColumnTemplate", { static: true }) birthDateColumnTemplate: TemplateRef<any>;
  @ViewChild("summaryTemplate", { static: true }) summaryTemplate: TemplateRef<any>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.gridColumns = [
      new Column({ dataField: "Id", visible: true, width: 200, caption: "Id", dataType: DataTypes.Number, sortEnable: true, filterEnable: true, onCellClick: this.cellClicked , stickyColumnLeft:true}),
      new Column({ dataField: "FirstName", visible: true, width: 200, caption: "First Name", dataType: DataTypes.String, sortEnable: true, filterEnable: true }),
      new Column({ dataField: "LastName", visible: true, width: 200, caption: "Last Name", dataType: DataTypes.String }),
      new Column({ dataField: "BirthDate", visible: true, width: 200, caption: "Birth Date", dataType: DataTypes.Date, filterEnable: true, cellTemplate: this.birthDateColumnTemplate }),
      new Column({ dataField: "Age", visible: true, width: 200, dataType: DataTypes.Number, sortEnable: true, filterEnable: true, styleClass: "color-red", rightAlignText: true }),
      new Column({ dataField: "Active", visible: true, width: 200, caption: "Is Active?", dataType: DataTypes.Boolean, filterEnable: true }),
      new Column({ visible: true, width: 200, cellTemplate: this.actionButtonsTemplate , stickyColumnRight:true})];

    this.gridDataSource = new BehaviorSubject(null);

    this.dataService.getAll().subscribe((data: any) => {
      // for client side data pass total is 0, as it will calculate total from length of array.
      var dataSource = new DataSource(data, 0, { totalCount: 10000 });
      this.gridDataSource.next(dataSource);
    });
  }

  cellClicked(event: any, column: any, row: any) {
    //alert("column " + column.dataField + " clicked. Value is " + row[column.dataField]);
  }

  onActionClick(rowData: any, event: any, $event) {
    $event.stopPropagation();
    if (event == "Edit") {
      alert('Edit button click for row: ' + rowData.Id);
    }
    if (event == "Delete") {
      alert('Delete button click for row: ' + rowData.Id);
    }
  }

}
