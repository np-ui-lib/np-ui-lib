import { TemplateRef } from "@angular/core";
import { DataTypes, FilterTypes, SortDirections } from "./constants";

export class Column {
  constructor(item: any) {
    this.dataField = item.dataField;
    this.dataType = item.dataType ? item.dataType : DataTypes.String;
    this.visible = item.visible;
    this.width = item.width;
    this.caption = item.caption ? item.caption : item.dataField;
    this.sortDirection = item.sortDirection;
    this.filterValue = item.filterValue;
    this.filterOperator = item.filterOperator;
    this.sortEnable = item.sortEnable;
    this.filterEnable = item.filterEnable;
    this.cellTemplate = item.cellTemplate;
    this.onCellClick = item.onCellClick;
    this.styleClass = item.styleClass;
    this.rightAlignText = item.rightAlignText;
    this.trueFilterText = item.trueFilterText;
    this.falseFilterText = item.falseFilterText;
  }

  public dataField: string;
  public dataType: DataTypes;
  public visible: boolean;
  public width: number;
  public caption: string;
  public sortEnable: boolean;
  public sortDirection: SortDirections;
  public filterEnable: boolean;
  public filterOperator: FilterTypes;
  public filterValue: any;
  public cellTemplate: TemplateRef<any>;
  public rightAlignText: boolean;
  public trueFilterText: string;
  public falseFilterText: string;
  public styleClass: string;
  public onCellClick: any;
}
