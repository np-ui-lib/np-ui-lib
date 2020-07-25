export class NpBreadcrumbItem {
    constructor(item: any) {
        this.label = item.label;
        this.data = item.data;
    }
    public label: string;
    public data: any;
}
