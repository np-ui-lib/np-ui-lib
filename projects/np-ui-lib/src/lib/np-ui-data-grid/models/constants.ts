export class Constants {
    static filters(): any[] {
        return [{
            name: FilterTypes.StartsWith,
            text: "abc*",
            forDataType: DataTypes.String
        },
        {
            name: FilterTypes.EndsWith,
            text: "*abc",
            forDataType: DataTypes.String
        },
        {
            name: FilterTypes.Contains,
            text: "*abc*",
            forDataType: DataTypes.String
        },
        {
            name: FilterTypes.GreaterThan,
            text: ">",
            forDataType: DataTypes.Number
        },
        {
            name: FilterTypes.LessThan,
            text: "<",
            forDataType: DataTypes.Number
        },
        {
            name: FilterTypes.GreaterThanOrEquals,
            text: ">=",
            forDataType: DataTypes.Number
        },
        {
            name: FilterTypes.LessThanOrEquals,
            text: "<=",
            forDataType: DataTypes.Number
        }, {
            name: FilterTypes.Equals,
            text: "=",
            forDataType: DataTypes.Number
        },
        {
            name: FilterTypes.Equals,
            text: "=",
            forDataType: DataTypes.Boolean
        },
        {
            name: FilterTypes.GreaterThan,
            text: ">",
            forDataType: DataTypes.Date
        }, {
            name: FilterTypes.LessThan,
            text: "<",
            forDataType: DataTypes.Date
        },
        {
            name: FilterTypes.GreaterThanOrEquals,
            text: ">=",
            forDataType: DataTypes.Date
        }, {
            name: FilterTypes.LessThanOrEquals,
            text: "<=",
            forDataType: DataTypes.Date
        }, {
            name: FilterTypes.Equals,
            text: "=",
            forDataType: DataTypes.Date
        }, {
            name: FilterTypes.NotEquals,
            text: "≠",
            forDataType: DataTypes.Number
        },
        {
            name: FilterTypes.NotEquals,
            text: "≠",
            forDataType: DataTypes.Date
        },
        {
            name: FilterTypes.NotEquals,
            text: "≠",
            forDataType: DataTypes.Boolean
        }];
    }
}

export enum FilterTypes {
    StartsWith = "startswith",
    EndsWith = "endswith",
    Contains = "contains",
    GreaterThan = "gt",
    LessThan = "lt",
    LessThanOrEquals = "le",
    GreaterThanOrEquals = "ge",
    Equals = "eq",
    NotEquals = "ne",
    Reset = "Reset"
}

export enum DataTypes {
    Number = "number",
    String = "string",
    Date = "date",
    Boolean = "boolean"
}

export enum SortDirections {
    Ascending = "asc",
    Descending = "desc"
}