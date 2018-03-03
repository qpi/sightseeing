import { OverpassService } from '../overpass.service';
import { Poi } from './poi';
import { PoiType } from './poitype';
import { RouteService } from '../route/route.service';
import { WayPoint } from '../waypoint';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PoiService {

  private _poiList$: BehaviorSubject<Poi[]> = new BehaviorSubject<Poi[]>([]);
  public readonly poiList$ = this._poiList$.asObservable();

  constructor(private _overpassService: OverpassService, public snackBar: MatSnackBar) {}

  public updatePoiList( poiType: PoiType, startPoint: WayPoint, endPoint: WayPoint ) {
      if (
        endPoint !== null &&
        startPoint !== null
      ) {
        if ( poiType !== null ) {
          let leftBottomLongitude: number;
          let leftBottomLatitude: number;
          let rightTopLongitude: number;
          let rightTopLatitude: number;

          if ( startPoint.latitude < endPoint.latitude ) {
            leftBottomLatitude = startPoint.latitude;
            rightTopLatitude = endPoint.latitude;
          } else {
            leftBottomLatitude = endPoint.latitude;
            rightTopLatitude = startPoint.latitude;
          }

          if ( startPoint.longitude < endPoint.longitude ) {
            leftBottomLongitude = startPoint.longitude;
            rightTopLongitude = endPoint.longitude;
          } else {
            leftBottomLongitude = endPoint.longitude;
            rightTopLongitude = startPoint.longitude;
          }
          // when the start and the end pont Longitude are too close together
          if ( (leftBottomLongitude - rightTopLongitude) < 0.005 ) {
            leftBottomLongitude -= 0.01;
            rightTopLongitude += 0.01;
          }
          // when the start and the end pont Longitude are too close together
          if ( (leftBottomLatitude - rightTopLatitude) < 0.005 ) {
            leftBottomLatitude -= 0.01;
            rightTopLatitude += 0.01;
          }

          leftBottomLongitude -= 0.01;
          leftBottomLatitude -= 0.01;
          rightTopLongitude += 0.01;
          rightTopLatitude += 0.01;

          const pois = this._overpassService.getPOIs(
            poiType,
            leftBottomLongitude,
            leftBottomLatitude,
            rightTopLongitude,
            rightTopLatitude
          ).subscribe((res: Response) => {
            const poiList: Poi[] = res['elements'].reduce( (list: Poi[], element) => {
              if (
                element['tags'] !== undefined &&
                element['tags']['name'] !== undefined
              ) {
                const poi = new Poi(
                  poiType,
                  element['id'],
                  element['lat'],
                  element['lon'],
                  element['tags']['name']
                );

                if ( element['tags']['name'] !== undefined ) {
                  poi.email = element['tags']['email'];
                }

                if ( element['tags']['facebook'] !== undefined ) {
                  poi.facebook = element['tags']['facebook'];
                }

                if ( element['tags']['phone'] !== undefined ) {
                  poi.phone = element['tags']['phone'];
                }

                if ( element['tags']['website'] !== undefined ) {
                  poi.website = element['tags']['website'];
                }

                let address = '';
                if ( element['tags']['addr:postcode'] !== undefined ) {
                  address = element['tags']['addr:postcode'];
                }
                if ( element['tags']['addr:city'] !== undefined ) {
                  address += ' ' + element['tags']['addr:city'];
                }
                if ( element['tags']['addr:street'] !== undefined ) {
                  address += ', ' + element['tags']['addr:street'];
                }
                if ( element['tags']['addr:housenumber'] !== undefined ) {
                  address += ' ' + element['tags']['addr:housenumber'];
                }
                if ( address.length > 0 ) {
                  poi.address = address;
                }

                return list.concat([poi]);
              }
              return list;
            }, <Poi[]>[]);
            this._poiList$.next(poiList);
            if ( poiList.length === 0 ) {
              this.snackBar.open('There is no any available POI around the route or the POI service is down', 'close', {
                duration: 5000,
              });
            }
          });
        } else {
          this._poiList$.next(<Poi[]>[]);
        }
      }
  }

}
