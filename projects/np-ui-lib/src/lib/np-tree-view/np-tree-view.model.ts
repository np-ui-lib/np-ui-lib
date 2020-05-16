export class NpTreeViewItem {
    constructor(item: any) {
        this.label = item["label"];
        this.items = item["items"];
        this.data = item["data"];
    }

    label: string;
    _isVisible: boolean;
    items: NpTreeViewItem[];
    data: any;
}