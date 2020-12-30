import { Injectable } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
@Injectable()
export class NpUtilityService {
    isEqual(x: any, y: any) {
        if (x === y) { return true; }
        if (!(x instanceof Object) || !(y instanceof Object)) { return false; }
        if (x.constructor !== y.constructor) { return false; }

        for (const p in x) {
            if (!x.hasOwnProperty(p)) { continue; }
            if (!y.hasOwnProperty(p)) { return false; }
            if (x[p] === y[p]) { continue; }
            if (typeof (x[p]) !== 'object') { return false; }
            if (!this.isEqual(x[p], y[p])) { return false; }
        }

        for (const p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) { return false; }
        }
        return true;
    }
    ReverseFormatDate(value: string, formatDate: string): any {
        if (value.length === 0) {
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
                        {
                            day = value.substr(formatDate.indexOf('d'),
                                (value.length - formatDate.length) + pattern[i].length);
                            break;
                        }
                    case 'M':
                    case 'MM':
                        {
                            month = Number(value.substr(formatDate.indexOf('M'),
                                (value.length - formatDate.length) + pattern[i].length)) - 1;
                            break;
                        }
                    case 'MMM':
                    case 'MMMM':
                        {
                            const m = value.substr(formatDate.indexOf('M'),
                                (value.length - formatDate.length) + pattern[i].length);
                            month = this.getMonth(m.toLowerCase());
                            break;
                        }
                    case 'y':
                    case 'yy':
                    case 'yyyy':
                        {
                            year = value.substr(formatDate.indexOf('y'),
                                (value.length - formatDate.length) + pattern[i].length);
                            break;
                        }
                }
            }
        }

        const result = new Date(year, month, day);
        if (result.toString() === 'Invalid Date') {
            return 'Invalid Date';
        }
        return result;
    }
    private getMonth(month) {
        let result = 0;
        switch (month) {
            case 'january':
            case 'jan':
                result = 0;
                break;
            case 'february':
            case 'feb':
                result = 1;
                break;
            case 'march':
            case 'mar':
                result = 2;
                break;
            case 'april':
            case 'apr':
                result = 3;
                break;
            case 'may':
                result = 4;
                break;
            case 'june':
            case 'jun':
                result = 5;
                break;
            case 'july':
            case 'jul':
                result = 6;
                break;
            case 'august':
            case 'aug':
                result = 7;
                break;
            case 'september':
            case 'sep':
                result = 8;
                break;
            case 'october':
            case 'oct':
                result = 9;
                break;
            case 'november':
            case 'nov':
                result = 10;
                break;
            case 'december':
            case 'dec':
                result = 11;
                break;
        }
        return result;
    }
    getPosition(placement: string): ConnectedPosition[] {
        let result: ConnectedPosition[];
        switch (placement) {
            case 'left':
                {
                    result = [{
                        originX: 'start',
                        originY: 'center',
                        overlayX: 'end',
                        overlayY: 'center',
                        offsetX: -5
                    }];
                    break;
                }
            case 'right':
                {
                    result = [{
                        originX: 'end',
                        originY: 'center',
                        overlayX: 'start',
                        overlayY: 'center',
                        offsetX: 5
                    }];
                    break;
                }
            case 'top':
                {
                    result = [{
                        originX: 'center',
                        originY: 'top',
                        overlayX: 'center',
                        overlayY: 'bottom',
                        offsetY: -5
                    }];
                    break;
                }
            case 'bottom':
                {
                    result = [{
                        originX: 'center',
                        originY: 'bottom',
                        overlayX: 'center',
                        overlayY: 'top',
                        offsetY: 5
                    }];
                    break;
                }
            default: {
                result = [{
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'top',
                    offsetY: 5
                }, {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom',
                    offsetY: -5
                }, {
                    originX: 'start',
                    originY: 'center',
                    overlayX: 'end',
                    overlayY: 'center',
                    offsetX: -5
                }, {
                    originX: 'end',
                    originY: 'center',
                    overlayX: 'start',
                    overlayY: 'center',
                    offsetX: 5
                }];
            }
        }
        return result;
    }
}
