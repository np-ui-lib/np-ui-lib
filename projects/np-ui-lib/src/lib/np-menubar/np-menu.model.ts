export class NpMenuItem {
    constructor(item: any) {
        this.label = item["label"];
        this.icon = item["icon"];
        this.items = item["items"];
        this.url = item["url"];
        this.routerLink = item["routerLink"];
        this.onClick = item["onClick"];
        this._isItemsVisible = false;
    }
    public label: string;
    public icon: string;
    public items: NpMenuItem[];
    public url: string;
    public routerLink: string;
    public onClick: any;
    _isItemsVisible: boolean;
    _x: number;
    _y: number;
}