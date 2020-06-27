import { Injectable } from "@angular/core";
@Injectable()
export class NpUtilityService {
    isEqual(value: any, other: any) {
        var type = Object.prototype.toString.call(value);
        if (type !== Object.prototype.toString.call(other)) return false;
        if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;
        var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
        var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
        if (valueLen !== otherLen) return false;
        var compare = function (item1, item2) {
            var itemType = Object.prototype.toString.call(item1);
            if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
                if (!this.isEqual(item1, item2)) return false;
            }
            else {
                if (itemType !== Object.prototype.toString.call(item2)) return false;
                if (itemType === '[object Function]') {
                    if (item1.toString() !== item2.toString()) return false;
                } else {
                    if (item1 !== item2) return false;
                }
            }
        };
        if (type === '[object Array]') {
            for (var i = 0; i < valueLen; i++) {
                if (compare(value[i], other[i]) === false) return false;
            }
        } else {
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    if (compare(value[key], other[key]) === false) return false;
                }
            }
        }
        return true;
    };
    ReverseFormatDate(value: string, formatDate: string): Date {
        if (value.length == 0) {
            return null;
        }
        const formatTmp = formatDate.replace(/[a-z]/gi, '');
        const formatArray = formatTmp.split('');
        let day;
        let month;
        let year;
        const pattern = formatDate.split(formatArray[0]);

        if (value) {
            for (let i = 0; i < pattern.length; i++) {
                switch (pattern[i]) {
                    case 'd':
                    case 'dd':
                        day = value.substr(formatDate.indexOf('d'),
                            (value.length - formatDate.length) + pattern[i].length);
                        break;
                    case 'M':
                    case 'MM':
                        month = parseInt(value.substr(formatDate.indexOf('M'),
                            (value.length - formatDate.length) + pattern[i].length)) - 1;
                        break;
                    case 'MMM':
                    case 'MMMM':
                        {
                            var m = value.substr(formatDate.indexOf('M'),
                                (value.length - formatDate.length) + pattern[i].length);
                            month = this.getMonth(m.toLowerCase());
                            break;
                        }
                    case 'y':
                    case 'yy':
                    case 'yyyy':
                        year = value.substr(formatDate.indexOf('y'),
                            (value.length - formatDate.length) + pattern[i].length);
                        break;
                }
            }
        }

        var result = new Date(year, month, day);
        if (result.toString() == "Invalid Date") {
            return null;
        }
        return result;
    }

    private getMonth(month) {
        var result = 0;
        switch (month) {
            case "january":
            case "jan":
                result = 0;
                break;
            case "february":
            case "feb":
                result = 1;
                break;
            case "march":
            case "mar":
                result = 2;
                break;
            case "april":
            case "apr":
                result = 3;
                break;
            case "may":
                result = 4;
                break;
            case "june":
            case "jun":
                result = 5;
                break;
            case "july":
            case "jul":
                result = 6;
                break;
            case "august":
            case "aug":
                result = 7;
            case "september":
            case "sep":
                result = 8;
                break;
            case "october":
            case "oct":
                result = 9;
                break;
            case "november":
            case "nov":
                result = 10;
                break;
            case "december":
            case "dec":
                result = 11;
                break;
        }
        return result;
    }
}