export class NpTreeViewItem {
    constructor(item: any) {
        this.label = item.label;
        this.childItems = item.childItems;
        this.isExpanded = item.isExpanded;
        this.data = item.data;
    }

    label: string;
    isExpanded: boolean;
    childItems: NpTreeViewItem[];
    data: any;
}
