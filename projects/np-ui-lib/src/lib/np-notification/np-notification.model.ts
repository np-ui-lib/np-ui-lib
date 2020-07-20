export class NpNotification {
    constructor(value: any) {
        this.type = value.type;
        this.header = value.header;
        this.message = value.message;
        this.autoCloseTimeout = value.autoCloseTimeout;
        this.id = Math.random();
    }
    /* type should be Success, Error, Warning, Info */
    public type: string;
    public header: string;
    public message: string;
    public autoCloseTimeout: number;
    private id: number;
}
