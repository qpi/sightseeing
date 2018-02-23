import { PoiType } from './poitype';
export abstract class PoiCategory {
  abstract getEnum();
  abstract get name(): String;
  getIds(): PoiType[] {
    const ids = [];
    for (const item in this.getEnum() ) {
      if (this.getEnum().hasOwnProperty(item)) {
        ids.push( new PoiType( item, this.getEnum(), this.getEnum()[item]));
      }
    }
    return ids;
  }
}
