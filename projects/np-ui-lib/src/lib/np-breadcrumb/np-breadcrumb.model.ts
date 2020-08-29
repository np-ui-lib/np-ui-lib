export class NpBreadcrumbItem {
    constructor(item: any) {
        this.label = item.label;
        this.data = item.data;
        this.disabled = item.disabled;
    }
    public label: string;
    public data: any;
    public disabled: boolean;
}
