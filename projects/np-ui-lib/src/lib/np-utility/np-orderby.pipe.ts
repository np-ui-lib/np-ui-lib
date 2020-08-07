import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'npOrderBy'
})
@Injectable()
export class NpOrderByPipe implements PipeTransform {
    transform(data: any[], orderBy: string, dir: string): any[] {
        if (data && orderBy && dir) {
            if (dir.toLowerCase() === 'desc') {
                return data.concat().sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : ((b[orderBy] < a[orderBy]) ? -1 : 0));
            } else {
                return data.concat().sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : ((b[orderBy] > a[orderBy]) ? -1 : 0));
            }
        }
        else if (data && dir) {
            if (dir.toLowerCase() === 'desc') {
                return data.concat().sort((a, b) => (a < b) ? 1 : ((b < a) ? -1 : 0));
            } else {
                return data.concat().sort((a, b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
            }
        }
        else {
            return data;
        }
    }
}
