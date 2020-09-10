export class NpModalConfig {
    constructor(item: any) {
        this.hasBackDrop = item.hasBackDrop === false ? false : true;
        this.backDropClass = item.backDropClass ? item.backDropClass : 'np-modal-backdrop';
        this.height = item.height;
        this.width = item.width;
        this.showCloseButton = item.showCloseButton === false ? false : true;
        this.header = item.header;
    }
    public hasBackDrop: boolean;
    public backDropClass: string;
    public height: string | number;
    public width: string | number;
    public showCloseButton: boolean;
    public header: string;
}
