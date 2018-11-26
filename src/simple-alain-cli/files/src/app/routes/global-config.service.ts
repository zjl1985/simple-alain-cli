import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalConfigService {
  private _globalPath: string;
  constructor() {
    this._globalPath = '/province';
  }

  public get globalPath() {
    return this._globalPath;
  }

  public set globalPath(value: string) {
    this._globalPath = value;
  }
}
