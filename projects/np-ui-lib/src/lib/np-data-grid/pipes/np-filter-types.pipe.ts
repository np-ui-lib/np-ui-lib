import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTypesPipe'
})
@Injectable()
export class NpFilterTypesPipe implements PipeTransform {
    transform(filterList: any[], args: string): any {
        return filterList.filter(filterType => filterType.forDataType === args);
    }
}
