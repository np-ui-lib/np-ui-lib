export class NpTreeViewItem {
    constructor(item: any) {
        this.label = item.label;
        this.key = item.key;
        this.childItems = item.childItems;
        this.isExpanded = item.isExpanded;
        this.data = item.data;
        this.iconCss = item.iconCss;
    }

    label: string;
    key: any;
    isExpanded: boolean;
    childItems: NpTreeViewItem[];
    data: any;
    partiallySelected: boolean;
    iconCss: string;
}
