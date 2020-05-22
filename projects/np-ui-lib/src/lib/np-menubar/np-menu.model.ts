import { QueryParamsHandling } from '@angular/router';

export class NpMenuItem {
    constructor(item: any) {
        this.label = item["label"];
        this.items = item["items"];
        this.url = item["url"];
        this.onClick = item["onClick"];
        this.target = item["target"] ? item["target"] : "_self";
        this.routerLink = item["routerLink"];
        this.queryParams = item["queryParams"];
        this.fragment = item["fragment"];
        this.queryParamsHandling = item["queryParamsHandling"];
        this._isItemsVisible = false;
    }
    public label: string;
    public items: NpMenuItem[];
    public url: string;
    public onClick: any;
    public target: string;
    public routerLink: string;
    public queryParams: any;
    public fragment: string;
    public queryParamsHandling: QueryParamsHandling
    _isItemsVisible: boolean;
    _x: number;
    _y: number;
}