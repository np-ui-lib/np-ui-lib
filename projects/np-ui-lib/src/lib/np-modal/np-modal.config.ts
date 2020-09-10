export class NpModalConfig {
    constructor(item: any) {
        this.hasBackDrop = item.hasBackDrop === false ? false : true;
        this.backDropClass = item.backDropClass ? item.backDropClass : 'np-modal-backdrop';
        this.height = item.height;
        this.width = item.width;
        this.panelClass = item.panelClass ? item.panelClass : 'np-modal-overlay';
        this.showCloseButton = item.showCloseButton === false ? false : true;
    }
    public hasBackDrop: boolean;
    public backDropClass: string;
    public height: number;
    public width: number;
    public panelClass: string;
    public showCloseButton: boolean;
}
