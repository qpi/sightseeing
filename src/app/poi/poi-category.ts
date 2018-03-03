import { PoiType } from './poitype';
export abstract class PoiCategory {
  public readonly typeList: PoiType[] = new Array<PoiType>();
  protected _enum;
  private _id: String;
  private _name: String;

  constructor(id: String, name: String) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  protected setEnum( poiCategoryEnum ) {
    this._enum = poiCategoryEnum;
    for (const item in this._enum ) {
      if (this._enum.hasOwnProperty(item)) {
        this.typeList.push(new PoiType(item, this, this._enum[item]));
      }
    }
  }
}
