import { PoiCategory } from './poi-category';
import { PoiType } from './poitype';
import { WayPoint } from './waypoint';
export class Poi extends WayPoint {

  public address: String = null;
  public email: String = null;
  public facebook: String = null;
  public phone: String = null;
  public website: String = null;

  constructor(
    public type: PoiType,
    public id: String = null,
    public latitude: number,
    public longitude: number,
    public name: String = null
  ) {
    super(latitude, longitude);
  }
}
