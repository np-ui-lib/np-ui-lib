export class NpMenuItem {
    constructor(item: any) {
        this.label = item["label"];
        this.routerLinkActive = item["routerLinkActive"];
        this.items = item["items"];
        this.url = item["url"];
        this.routerLink = item["routerLink"];
        this.onClick = item["onClick"];
        this.target = item["target"] ? item["target"] : "_self";
        this._isItemsVisible = false;
    }
    public label: string;
    public routerLinkActive: string;
    public items: NpMenuItem[];
    public url: string;
    public routerLink: string;
    public onClick: any;
    public target: string;
    _isItemsVisible: boolean;
    _x: number;
    _y: number;
}