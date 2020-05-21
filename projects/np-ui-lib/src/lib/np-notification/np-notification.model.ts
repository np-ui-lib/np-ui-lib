export class NpNotification {
    constructor(value: any) {
        this.type = value["type"];
        this.header = value["header"];
        this.message = value["message"];
        this.autoCloseTimeout = value["autoCloseTimeout"];
        this._id = Math.random();
    }
    /**Value will be from Success, Warning, Error, Info only*/
    public type: string;
    public header: string;
    public message: string;
    /**No need to pass this value, as this is auto generated*/
    public _id: number;
    public autoCloseTimeout: number;
}