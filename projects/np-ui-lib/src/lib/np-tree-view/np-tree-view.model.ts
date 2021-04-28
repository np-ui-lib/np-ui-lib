export class NpTreeViewItem {
  constructor(item: any) {
    this.label = item.label;
    this.id = item.id;
    this.childItems = item.childItems;
    this.isExpanded = item.isExpanded;
    this.data = item.data;
    this.iconCss = item.iconCss;
  }

  label: string;
  id: any;
  isExpanded: boolean;
  childItems: NpTreeViewItem[];
  data: any;
  partiallySelected: boolean;
  iconCss: string;
}
