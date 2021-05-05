export class NpDialogConfig {
  constructor(item: any) {
    this.type = item.type || "alert";
    this.hasBackDrop = item.hasBackDrop === false ? false : true;
    this.backDropClass = item.backDropClass;
    this.inputId = item.inputId;
    this.styleClass = item.styleClass;
  }
  public type: "alert" | "confirm" | "prompt";
  public hasBackDrop: boolean;
  public backDropClass: string;
  public inputId: string;
  public styleClass: string;
}
