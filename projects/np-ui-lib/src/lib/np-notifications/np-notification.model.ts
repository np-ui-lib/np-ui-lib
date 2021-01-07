export class NpNotification {
    constructor(value: any) {
        this.type = value.type;
        this.header = value.header;
        this.message = value.message;
        this.autoCloseTimeout = value.autoCloseTimeout;
        this.id = Math.random();
    }
    /* type should be 'success' | 'danger' | 'info' | 'warning' */
    public type: string;
    public header: string;
    public message: string;
    public autoCloseTimeout: number;
    private id: number;

    _getId(){
        return this.id;
    }
}
