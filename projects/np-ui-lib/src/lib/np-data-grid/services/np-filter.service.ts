import { Injectable } from '@angular/core';
import { DataTypes, FilterTypes } from '../models/constants';

@Injectable()
export class NpFilterService {
    filterData(filterColumns: any[], data: any[]): any[] {
        for (const element of filterColumns) {
            if (element.filterOperator === FilterTypes.StartsWith) {
                const filterVal = element.filterValue.toLowerCase();
                data = this._custFilter(data, (a: any) => {
                    return a[element.dataField].toLowerCase().startsWith(filterVal, 0);
                });
            } else if (element.filterOperator === FilterTypes.EndsWith) {
                const filterVal = element.filterValue.toLowerCase();
                data = this._custFilter(data, (a: any) => {
                    return a[element.dataField].toLowerCase().endsWith(filterVal);
                });
            } else if (element.filterOperator === FilterTypes.Contains) {
                const filterVal = element.filterValue.toLowerCase();
                data = this._custFilter(data, (a: any) => {
                    return a[element.dataField].toLowerCase().indexOf(filterVal) !== -1;
                });
            } else if (element.filterOperator === FilterTypes.GreaterThan) {
                if (element.dataType === DataTypes.Number) {
                    const filterVal = Number(element.filterValue);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField] > filterVal;
                    });
                } else if (element.dataType === DataTypes.Date) {
                    const filterVal = new Date(element.filterValue).setHours(0, 0, 0, 0);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField].setHours(0, 0, 0, 0) > filterVal;
                    });
                }
            } else if (element.filterOperator === FilterTypes.GreaterThanOrEquals) {
                if (element.dataType === DataTypes.Number) {
                    const filterVal = Number(element.filterValue);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField] >= filterVal;
                    });
                } else if (element.dataType === DataTypes.Date) {
                    const filterVal = new Date(element.filterValue).setHours(0, 0, 0, 0);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField].setHours(0, 0, 0, 0) >= filterVal;
                    });
                }
            } else if (element.filterOperator === FilterTypes.LessThan) {
                if (element.dataType === DataTypes.Number) {
                    const filterVal = Number(element.filterValue);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField] < filterVal;
                    });
                } else if (element.dataType === DataTypes.Date) {
                    const filterVal = new Date(element.filterValue).setHours(0, 0, 0, 0);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField].setHours(0, 0, 0, 0) < filterVal;
                    });
                }
            } else if (element.filterOperator === FilterTypes.LessThanOrEquals) {
                if (element.dataType === DataTypes.Number) {
                    const filterVal = Number(element.filterValue);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField] <= filterVal;
                    });
                } else if (element.dataType === DataTypes.Date) {
                    const filterVal = new Date(element.filterValue).setHours(0, 0, 0, 0);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField].setHours(0, 0, 0, 0) <= filterVal;
                    });
                }
            } else if (element.filterOperator === FilterTypes.Equals) {
                if (element.dataType === DataTypes.Boolean) {
                    if (element.filterValue === 'true') {
                        data = this._custFilter(data, (a: any) => {
                            return a[element.dataField] === true;
                        });
                    } else {
                        data = this._custFilter(data, (a: any) => {
                            return a[element.dataField] === false;
                        });
                    }
                } else if (element.dataType === DataTypes.Number) {
                    const filterVal = Number(element.filterValue);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField] === filterVal;
                    });
                } else if (element.dataType === DataTypes.Date) {
                    const filterVal = new Date(element.filterValue).setHours(0, 0, 0, 0);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField].setHours(0, 0, 0, 0) === filterVal;
                    });
                } else if (element.dataType === DataTypes.String) {
                    const filterVal = element.filterValue.toLowerCase();
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField].toLowerCase() === filterVal;
                    });
                }
            } else if (element.filterOperator === FilterTypes.NotEquals) {
                if (element.dataType === DataTypes.Boolean) {
                    if (element.filterValue === 'true') {
                        data = this._custFilter(data, (a: any) => {
                            return a[element.dataField] !== true;
                        });
                    } else {
                        data = this._custFilter(data, (a: any) => {
                            return a[element.dataField] !== false;
                        });
                    }
                } else if (element.dataType === DataTypes.Number) {
                    const filterVal = Number(element.filterValue);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField] !== filterVal;
                    });
                } else if (element.dataType === DataTypes.Date) {
                    const filterVal = new Date(element.filterValue).setHours(0, 0, 0, 0);
                    data = this._custFilter(data, (a: any) => {
                        return a[element.dataField].setHours(0, 0, 0, 0) !== filterVal;
                    });
                }
            }
        }
        return data;
    }

    private _custFilter(arr: any[], fun: any) {
        return arr.filter(fun);
    }
}
