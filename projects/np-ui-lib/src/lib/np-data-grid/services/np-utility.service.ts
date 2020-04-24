import { Injectable } from "@angular/core";
import { SortDirections } from '../models/constants';

@Injectable()
export class NpUtilityService {
    custFilter(arr: any[], fun: any) {
        return arr.filter(fun);
    }

    custFind(arr: any[], fun: any): any {
        return arr.find(fun);
    }

    custSort(arr: any[], ele: string, order: string) {
        if (order === SortDirections.Ascending) {
            return arr.concat().sort((a, b) => (a[ele] > b[ele]) ? 1 : ((b[ele] > a[ele]) ? -1 : 0));
        } else {
            return arr.concat().sort((a, b) => (a[ele] < b[ele]) ? 1 : ((b[ele] < a[ele]) ? -1 : 0));
        }
    }
}