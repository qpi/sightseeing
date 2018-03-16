import { Poi } from '../poi/poi';
import { PoiType } from '../poi/poitype';
import { WayPoint } from '../poi/waypoint';
import { Serializable } from '../serializable';

export class SightseeingRoute extends Serializable {

  public id: string = null;
  public userId: string = null;
  public createdAt: number = null;
  public updatedAt: number = null;
  public name: string = null;
  public startPoint: WayPoint = null;
  public intermediatePoints: Poi[] = null;
  public endPoint: WayPoint = null;
  public isRoundTrip: boolean = null;
  public routeLength: number = null;
  public mapLatitude: number = null;
  public mapLongitude: number = null;
  public mapZoom: number = null;

  public constructor( routeObject: any) {
    super();
    for ( const key of Object.keys(routeObject) ) {
      if ( this.hasOwnProperty(key) ) {
        switch (key) {
          case 'startPoint':
          case 'endPoint':
            this[key] = new WayPoint( routeObject[key].latitude, routeObject[key].longitude );
            break;
          case 'intermediatePoints':
            this[key] = routeObject[key].map( (attribute) => {
              const poi = new Poi(
                new PoiType(attribute.type.id, attribute.type.category, attribute.type.title),
                attribute.id,
                attribute.latitude,
                attribute.longitude,
                attribute.name
              );
              for ( const poiKey of Object.keys(attribute) ) {
                switch (poiKey) {
                  case 'type':
                  case 'id':
                  case 'latitude':
                  case 'longitude':
                  case 'name':
                    // do nothing because the constructor previously set them
                    break;
                  default:
                    if ( poi.hasOwnProperty(poiKey) ) {
                      poi[poiKey] = attribute[poiKey];
                    }
                    break;
                }
              }
              return poi;
            });
            break;
          default:
            this[key] = routeObject[key];
            break;
        }
      }
    }
  }
}
