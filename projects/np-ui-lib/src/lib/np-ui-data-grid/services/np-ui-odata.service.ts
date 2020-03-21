import { Injectable } from "@angular/core";
import { DataTypes } from '../models/constants';

@Injectable()
export class NpODataService {
    buildQuery(top: number, skip: number, sortColumns: any[], filterColumns: any[], inlineCount?: string): string {
        var queryTmpArray = [];
        if (inlineCount && inlineCount.length > 0) {
            queryTmpArray.push(`$inlinecount=${inlineCount}`);
        } else {
            queryTmpArray.push('$count=true');
            queryTmpArray.push(`$top=${top}`);
            queryTmpArray.push(`$skip=${skip}`);
        }

        if (sortColumns) {
            let sortQueue = [];
            for (let element of sortColumns) {
                sortQueue.push(element.dataField + " " + element.sortDirection);
            }
            if (sortQueue.length > 0) {
                queryTmpArray.push("$orderby=" + sortQueue.join(','));
            }
        }

        if (filterColumns) {
            if (filterColumns && filterColumns.length === 1) {
                if (filterColumns[0].dataType === DataTypes.String) {
                    queryTmpArray.push("$filter=" + filterColumns[0].filterOperator + "(" + filterColumns[0].dataField + ",'" + filterColumns[0].filterValue + "')");
                } else {
                    queryTmpArray.push("$filter=" + filterColumns[0].dataField + " " + filterColumns[0].filterOperator + " " + filterColumns[0].filterValue);
                }
            }
            if (filterColumns && filterColumns.length > 1) {
                let filterQueue = [];
                for (let element of filterColumns) {
                    if (element.dataType === DataTypes.String) {
                        filterQueue.push(element.filterOperator + "(" + element.dataField + ",'" + element.filterValue + "')");
                    } else {
                        filterQueue.push(element.dataField + " " + element.filterOperator + " " + element.filterValue);
                    }
                }
                if (filterQueue.length > 1) {
                    queryTmpArray.push("$filter=" + filterQueue.join(' and '));
                }
            }
        }

        return queryTmpArray.join('&');
    }
}