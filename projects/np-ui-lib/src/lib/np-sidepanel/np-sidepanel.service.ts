import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NpSidepanelService {
  private _observables = {};

  _add(id: string): Subject<any> {
    this._observables[id] = new Subject<any>();
    return this._observables[id];
  }

  get(id: string): Subject<any> {
    return this._observables[id];
  }

  _remove(id: string): void {
    delete this._observables[id];
  }

  closeSidepanel(id: string, data: any): void {
    this._observables[id].next(data);
  }
}
