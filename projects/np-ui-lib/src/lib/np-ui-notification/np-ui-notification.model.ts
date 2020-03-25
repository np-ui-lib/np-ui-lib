export class NpUiNotification {
    constructor(value: any) {
        this.message = value["message"];
        this.type = value["type"];;
        this.header = value["header"];
        this.timeout = value["timeout"];
        this.id = Math.random();
    }
    public message: string;
    /**Value will be from Success, Warning, Error, Info only*/
    public type: string;
    public header: string;
    /**No need to pass this value, as this is auto generated*/
    public id: number;
    public timeout: number;
}