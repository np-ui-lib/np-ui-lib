export class NpNotification {
  constructor(value: any) {
    this.type = value.type;
    this.header = value.header;
    this.message = value.message;
    this.autoCloseTimeout = value.autoCloseTimeout;
    this.id = Math.floor(Math.random() * 100) + 1;
  }

  public type: string;
  public header: string;
  public message: string;
  public autoCloseTimeout: number;
  private id: number;

  _getId(): number {
    return this.id;
  }
}
