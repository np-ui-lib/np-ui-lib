export class NpBreadcrumbItem {
  constructor(item: any) {
    this.id = item.id;
    this.label = item.label;
    this.data = item.data;
    this.disabled = item.disabled;
  }
  public id: string;
  public label: string;
  public data: any;
  public disabled: boolean;
}
