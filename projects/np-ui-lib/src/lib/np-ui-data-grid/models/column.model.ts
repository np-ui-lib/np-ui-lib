import { TemplateRef } from "@angular/core";
import { DataTypes, FilterTypes, SortDirections } from './constants';

/**
 * grid column class
 */
export class Column {

    /**constructor */
    constructor(item: any) {
        this.dataField = item["dataField"];
        this.dataType = item["dataType"] ? item["dataType"] : DataTypes.String;
        this.visible = item["visible"];
        this.width = item["width"];
        this.caption = item["caption"] ? item["caption"] : item["dataField"];
        this.sortDirection = item["sortDirection"];
        this.filterValue = item["filterValue"];
        this.filterOperator = item["filterOperator"];
        this.sortEnable = item["sortEnable"];
        this.filterEnable = item["filterEnable"];
        this.cellTemplate = item["cellTemplate"];
        this.onCellClick = item["onCellClick"];
        this.styleClass = item["styleClass"];
        this.rightAlignText = item["rightAlignText"];
        this.stickyColumnLeft = item["stickyColumnLeft"];
        this.stickyColumnRight = item["stickyColumnRight"];
    }

    public dataField: string;
    public dataType: DataTypes;
    public visible: boolean;
    public width: number;
    public caption: string;
    public sortDirection: SortDirections;
    public filterValue: string;
    public filterOperator: FilterTypes;
    public sortEnable: boolean;
    public filterEnable: boolean;
    public cellTemplate: TemplateRef<any>;
    public onCellClick: any;
    public styleClass: string;
    public rightAlignText: boolean;
    public stickyColumnLeft: boolean;
    public stickyColumnRight: boolean;
}