import { Column } from './column.model';

export class State {

    constructor(name: string, columns: any[]) {
        this.name = name;
        this.columns = columns;
    }

    public name: string;
    public columns: Column[];
}