export class DataSource {
    constructor(data: any[], total?: number, summary?: any, isAllPages?: boolean) {
        this.data = data;
        this.total = total;
        this.summary = summary;
        this.isAllPages = isAllPages ? isAllPages : false;
    }
    public data: any[];
    public total: number;
    public summary: any;
    public isAllPages: boolean;
}