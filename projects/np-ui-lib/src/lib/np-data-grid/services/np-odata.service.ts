import { Injectable } from "@angular/core";
import { DataTypes, FilterTypes } from "../models/constants";

@Injectable()
export class NpODataService {
  buildQuery(
    filterColumns: any[],
    sortColumns: any[],
    top: number,
    skip: number,
    getTotalRecords: boolean = true,
    odataVersion: 1 | 2 | 3 | 4 = 4
  ): string {
    const queryTmpArray = [];

    // filter
    if (filterColumns) {
      if (filterColumns && filterColumns.length === 1) {
        if (filterColumns[0].dataType === DataTypes.String) {
          if (filterColumns[0].filterOperator === FilterTypes.Equals) {
            queryTmpArray.push(
              `$filter=(${filterColumns[0].dataField} eq '${filterColumns[0].filterValue}')`
            );
          } else {
            queryTmpArray.push(
              `$filter=(${filterColumns[0].filterOperator}(${filterColumns[0].dataField},'${filterColumns[0].filterValue}'))`
            );
          }
        } else {
          queryTmpArray.push(
            `$filter=(${filterColumns[0].dataField} ${filterColumns[0].filterOperator} ${filterColumns[0].filterValue})`
          );
        }
      }
      if (filterColumns && filterColumns.length > 1) {
        const filterQueue = [];
        for (const element of filterColumns) {
          if (element.dataType === DataTypes.String) {
            if (element.filterOperator === FilterTypes.Equals) {
              filterQueue.push(
                `${element.dataField} eq '${element.filterValue}'`
              );
            } else {
              filterQueue.push(
                `${element.filterOperator}(${element.dataField} ,'${element.filterValue}')`
              );
            }
          } else {
            filterQueue.push(
              `${element.dataField} ${element.filterOperator} ${element.filterValue}`
            );
          }
        }
        if (filterQueue.length > 1) {
          queryTmpArray.push(`$filter=(${filterQueue.join(" and ")})`);
        }
      }
    }

    // sorting
    if (sortColumns) {
      const sortQueue = [];
      for (const element of sortColumns) {
        sortQueue.push(`${element.dataField} ${element.sortDirection}`);
      }
      if (sortQueue.length > 0) {
        queryTmpArray.push(`$orderby=${sortQueue.join(", ")}`);
      }
    }

    // top
    if (top > 0) {
      queryTmpArray.push(`$top=${top}`);
    }

    // skip
    if (skip > 0) {
      queryTmpArray.push(`$skip=${skip}`);
    }

    // inlinecount
    if (getTotalRecords) {
      if (odataVersion == 4) {
        queryTmpArray.push(`$count=true`);
      } else {
        queryTmpArray.push(`$inlinecount=allpages`);
      }
    } else {
      if (odataVersion == 4) {
        queryTmpArray.push(`$count=false`);
      } else {
        queryTmpArray.push(`$inlinecount=none`);
      }
    }

    return queryTmpArray.join("&");
  }
}
