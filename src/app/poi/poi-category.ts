import { PoiType } from './poitype';
export abstract class PoiCategory {
  public readonly typeList: PoiType[] = new Array<PoiType>();
  protected _enum;
//  private _id: String;
//  private _name: String;

  constructor(public id: String, public name: String) {
//    this._id = id;
//    this._name = name;
  }


  protected setEnum( poiCategoryEnum ) {
    this._enum = poiCategoryEnum;
    for (const item in this._enum ) {
      if (this._enum.hasOwnProperty(item)) {
        this.typeList.push(new PoiType(item, this.name, this._enum[item]));
      }
    }
  }
}
