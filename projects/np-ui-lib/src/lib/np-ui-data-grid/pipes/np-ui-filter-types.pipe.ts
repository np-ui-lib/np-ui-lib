import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { FilterTypes } from '../models/constants';
@Pipe({
    name: 'filterTypesPipe'
})
@Injectable()
export class NpFilterTypesPipe implements PipeTransform {
    transform(filterList: any[], args: string): any {
        return filterList.filter(filterType => filterType.forDataType === args);
    }
}