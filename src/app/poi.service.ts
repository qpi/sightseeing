import { OverpassService } from './overpass.service';
import { PoiType } from './poitype';
import { RouteService } from './route/route.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PoiService {

  private _typeToCollect$: BehaviorSubject<PoiType> = new BehaviorSubject<PoiType>(null);
  public readonly typeToCollect$ = this._typeToCollect$.asObservable();

  public setTypeToCollect( poiType: PoiType ) {
    this._typeToCollect$.next(poiType);
  }

  private _poiList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public readonly poiList$ = this._poiList$.asObservable();

  constructor(private _overpassService: OverpassService, private _routeService: RouteService) {

    this.typeToCollect$.subscribe( poi => {
      if (
        this._routeService.endPoint !== null &&
        this._routeService.startPoint !== null &&
        this._typeToCollect$.value !== null
      ) {
        const poiType = this._typeToCollect$.value;
        let leftTopLongitude: number;
        let leftTopLatitude: number;
        let rightBottomLongitude: number;
        let rightBottomLatitude: number;

        if ( this._routeService.startPoint.latitude < this._routeService.endPoint.latitude ) {
          leftTopLatitude = this._routeService.startPoint.latitude;
          rightBottomLatitude = this._routeService.endPoint.latitude;
        } else {
          leftTopLatitude = this._routeService.endPoint.latitude;
          rightBottomLatitude = this._routeService.startPoint.latitude;
        }

        if ( this._routeService.startPoint.longitude > this._routeService.endPoint.longitude ) {
          leftTopLongitude = this._routeService.startPoint.longitude;
          rightBottomLongitude = this._routeService.endPoint.longitude;
        } else {
          leftTopLongitude = this._routeService.endPoint.longitude;
          rightBottomLongitude = this._routeService.startPoint.longitude;
        }
        const pois = this._overpassService.getPOIs(
            poiType.category,
            poiType.id,
            leftTopLongitude,
            leftTopLatitude,
            rightBottomLongitude,
            rightBottomLatitude
          ).subscribe((res: Response) => {
            console.log(res.json());
            //this._poiList$.next(res.json());
          });

      }
    });
  }

  //

}
