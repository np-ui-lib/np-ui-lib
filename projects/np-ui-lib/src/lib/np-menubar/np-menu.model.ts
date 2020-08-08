import { QueryParamsHandling } from '@angular/router';

export class NpMenuItem {
    constructor(item: any) {
        this.label = item.label;
        this.items = item.items;
        this.url = item.url;
        this.target = item.target ? item.target : '_self';
        this.routerLink = item.routerLink;
        this.queryParams = item.queryParams;
        this.fragment = item.fragment;
        this.queryParamsHandling = item.queryParamsHandling;
        this.iconCss = item.iconCss;
        this.isChildVisible = false;
        this.visible = item.visible === false ? false : true;
    }
    public label: string;
    public items: NpMenuItem[];
    public url: string;
    public target: string;
    public routerLink: string;
    public queryParams: any;
    public fragment: string;
    public queryParamsHandling: QueryParamsHandling;
    public iconCss: string;
    public visible: boolean;
    isChildVisible: boolean;
    x: number;
    y: number;
}
