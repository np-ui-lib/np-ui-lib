export class NpNotification {
  constructor(value: any) {
    this.type = value.type;
    this.header = value.header;
    this.message = value.message;
    this.autoCloseTimeout = value.autoCloseTimeout || 10000;
    this.id = Math.floor(Math.random() * 100) + 1;
  }

  public type: 'success' | 'danger' | 'info' | 'warning';
  public header: string;
  public message: string;
  public autoCloseTimeout: number;
  private id: number;

  _getId(): number {
    return this.id;
  }
}
