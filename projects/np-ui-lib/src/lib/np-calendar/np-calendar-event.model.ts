export class NpCalendarEvent {
  constructor(item: any) {
    this.startDate = item.startDate;
    this.endDate = item.endDate;
    this.title = item.description;
    this.data = item.data;
    this.backgroundColor = item.backgroundColor;
    this.fontColor = item.fontColor;
  }
  public startDate: Date;
  public endDate: Date;
  public title: string;
  public data: any;
  public backgroundColor: string;
  public fontColor: string;
}
