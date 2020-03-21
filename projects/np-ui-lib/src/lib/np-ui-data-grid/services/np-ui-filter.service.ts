import { Injectable } from "@angular/core";
import { DataTypes, FilterTypes } from '../models/constants';

@Injectable()
export class NpFilterService {
    filterData(filterColumns: any[], data: any[]): any[] {
        for (let element of filterColumns) {
            if (element.filterOperator === FilterTypes.StartsWith) {
                data = this._custFilter(data, function (a) {
                    return a[element.dataField].toLowerCase().startsWith(element.filterValue.toLowerCase(), 0);
                });
            } else if (element.filterOperator === FilterTypes.EndsWith) {
                data = this._custFilter(data, function (a) {
                    return a[element.dataField].toLowerCase().endsWith(element.filterValue.toLowerCase());
                });
            } else if (element.filterOperator === FilterTypes.Contains) {
                data = this._custFilter(data, function (a) {
                    return a[element.dataField].toLowerCase().indexOf(element.filterValue.toLowerCase()) !== -1;
                });
            } else if (element.filterOperator === FilterTypes.GreaterThan) {
                if (element.dataType === DataTypes.Number) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField] > parseInt(element.filterValue);
                    });
                } else if (element.dataType === DataTypes.Date) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField].setHours(0, 0, 0, 0) > new Date(element.filterValue).setHours(0, 0, 0, 0);
                    });
                }
            } else if (element.filterOperator === FilterTypes.GreaterThanOrEquals) {
                if (element.dataType === DataTypes.Number) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField] >= parseInt(element.filterValue);
                    });
                } else if (element.dataType === DataTypes.Date) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField].setHours(0, 0, 0, 0) >= new Date(element.filterValue).setHours(0, 0, 0, 0);
                    });
                }
            } else if (element.filterOperator === FilterTypes.LessThan) {
                if (element.dataType === DataTypes.Number) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField] < parseInt(element.filterValue);
                    });
                } else if (element.dataType === DataTypes.Date) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField].setHours(0, 0, 0, 0) < new Date(element.filterValue).setHours(0, 0, 0, 0);
                    });
                }
            } else if (element.filterOperator === FilterTypes.LessThanOrEquals) {
                if (element.dataType === DataTypes.Number) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField] <= parseInt(element.filterValue);
                    });
                } else if (element.dataType === DataTypes.Date) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField].setHours(0, 0, 0, 0) <= new Date(element.filterValue).setHours(0, 0, 0, 0);
                    });
                }
            } else if (element.filterOperator === FilterTypes.Equals) {
                if (element.dataType === DataTypes.Boolean) {
                    if (element.filterValue === "true") {
                        data = this._custFilter(data, function (a) {
                            return a[element.dataField] === true;
                        });
                    } else {
                        data = this._custFilter(data, function (a) {
                            return a[element.dataField] === false;
                        });
                    }
                } else if (element.dataType === DataTypes.Number) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField] === parseInt(element.filterValue);
                    });
                } else if (element.dataType === DataTypes.Date) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField].setHours(0, 0, 0, 0) === new Date(element.filterValue).setHours(0, 0, 0, 0);
                    });
                }
            } else if (element.filterOperator === FilterTypes.NotEquals) {
                if (element.dataType === DataTypes.Boolean) {
                    if (element.filterValue === "true") {
                        data = this._custFilter(data, function (a) {
                            return a[element.dataField] !== true;
                        });
                    } else {
                        data = this._custFilter(data, function (a) {
                            return a[element.dataField] !== false;
                        });
                    }
                } else if (element.dataType === DataTypes.Number) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField] !== parseInt(element.filterValue);
                    });
                } else if (element.dataType === DataTypes.Date) {
                    data = this._custFilter(data, function (a) {
                        return a[element.dataField].setHours(0, 0, 0, 0) !== new Date(element.filterValue).setHours(0, 0, 0, 0);
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