export class NpTreeViewItem {
    constructor(item: any) {
        this.label = item.label;
        this.items = item.items;
        this.data = item.data;
        this.isExpanded = item.isExpanded;
        this.isSelected = item.isSelected;
    }

    label: string;
    isExpanded: boolean;
    isSelected: boolean;
    items: NpTreeViewItem[];
    data: any;
}
