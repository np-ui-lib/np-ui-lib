import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Column } from "../models/column.model";
import { DataTypes } from "../models/constants";

@Injectable()
export class NpFileService {
  constructor(private datePipe: DatePipe) { }

  downloadCSVFile(
    data: any[],
    columns: any[],
    dateFormat: string,
    fileName?: string
  ): void {
    const CSVData = this.createCSVData(data, columns, dateFormat);
    return this.downloadFile(CSVData, this.normalizeFileName(fileName, "csv"));
  }

  private downloadFile(content: string, fileName: string): void {
    const dataURI = this.generateDataURI(content);
    const anchor = document.createElement("a");
    anchor.href = dataURI;
    anchor.download = fileName;
    anchor.setAttribute("style", "visibility:hidden");
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  private generateDataURI(content: string): string {
    return "data:text/csv;charset=utf-8,\uFEFF" + encodeURIComponent(content);
  }

  private createCSVData(data: any[], columnList: Column[], dateFormat: string): any {
    const headersLabels = [];
    for (const element of columnList) {
      if (element.dataField === undefined) {
        continue;
      }
      headersLabels.push(element.caption);
    }
    const head = headersLabels.join(",") + "\r\n";
    const rows = [];
    for (const element of data) {
      const cols = [];
      for (const column of columnList) {
        if (
          element[column.dataField] !== undefined &&
          element[column.dataField] !== null
        ) {
          if (column.dataType === DataTypes.Date) {
            cols.push(
              this.datePipe.transform(element[column.dataField], dateFormat)
            );
          } else {
            cols.push(
              `"${element[column.dataField].toString().replace(/\"/g, '""')}"`
            );
          }
        } else {
          cols.push("");
        }
      }
      rows.push(cols.join(","));
    }
    return head + rows.join("\r\n");
  }

  private normalizeFileName(fileName: string, extension: string): string {
    if (fileName === undefined || fileName === null || fileName.length === 0) {
      fileName = "download";
    }
    const suffix = "." + extension;
    const extensionPattern = new RegExp(`(\\${extension})?$`);

    return fileName.replace(/\s+/, "_").replace(extensionPattern, suffix);
  }
}
