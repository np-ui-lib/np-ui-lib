import { Injectable } from "@angular/core";
import { Column } from '../models/column.model';

@Injectable()
export class NpFileService {
    downloadCSVFile(data: any[], columns: any[], fileName?: string) {
        const CSVData = this.createCSVData(data, columns);
        return this.downloadFile(CSVData, this.normalizeFileName(fileName, 'csv'));
    }

    private downloadFile(content: string, fileName: string): void {
        const dataURI = this.generateDataURI(content);

        const anchor = document.createElement('a');
        anchor.href = dataURI;

        anchor.download = fileName;
        anchor.setAttribute('style', 'visibility:hidden');

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    private generateDataURI(content: string): string {
        return 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(content);
    }

    private createCSVData(data: any[], columnList: Column[]) {
        var headersLabels = [];
        var headers = [];
        for (let element of columnList) {
            if (element.dataField === undefined) {
                continue;
            }
            headersLabels.push(element.caption);
            headers.push(element.dataField);
        }
        const head = headersLabels.join(',') + '\r\n';
        const rows = [];
        for (let element of data) {
            var cols = [];
            for (let column of headers) {
                cols.push(`"${element[column].toString().replace(/\"/g, '""')}"`);
            }
            rows.push(cols.join(","));
        }
        return head + rows.join('\r\n');
    }

    private normalizeFileName(fileName: string, extension: string) {
        if (fileName === undefined || fileName === null || fileName.length === 0) {
            fileName = "download";
        }
        const suffix = '.' + extension;
        const extensionPattern = new RegExp(`(\\${extension})?$`);

        return fileName.replace(/\s+/, '_').replace(extensionPattern, suffix);
    }
}

