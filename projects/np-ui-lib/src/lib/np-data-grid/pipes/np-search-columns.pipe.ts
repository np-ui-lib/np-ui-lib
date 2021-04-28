import { Injectable, Pipe, PipeTransform } from "@angular/core";
import { Column } from "../models/column.model";

@Pipe({
  name: "searchColumnsPipe",
})
@Injectable()
export class NpSearchColumnsPipe implements PipeTransform {
  transform(filterList: Column[], args: string): any {
    if (args) {
      const result = filterList.filter((column: Column) => {
        return (
          column.caption && column.caption.toLowerCase().startsWith(args, 0)
        );
      });
      return result;
    }
    return filterList;
  }
}
