import { OsrmService } from '../osrm.service';
import { Poi } from '../poi/poi';
import { PoiService } from '../poi/poi.service';
import { PoiType } from '../poi/poitype';
import { WayPoint } from '../waypoint';
import { Injectable, Injector } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class RouteService {

  public readonly walkingSpeed = 1.4; // in meter/second

  private _startPoint$: BehaviorSubject<WayPoint> = new BehaviorSubject<WayPoint>(null);
  public readonly startPoint$ = this._startPoint$.asObservable();

  get startPoint() {
    return this._startPoint$.value;
  }

  set startPoint( wayPoint: WayPoint ) {
    this._startPoint$.next(wayPoint);
  }

  private _endPoint$: BehaviorSubject<WayPoint> = new BehaviorSubject<WayPoint>(null);
  public readonly endPoint$ = this._endPoint$.asObservable();

  get endPoint() {
    return this._endPoint$.value;
  }

  set endPoint( wayPoint: WayPoint ) {
    this._endPoint$.next(wayPoint);
  }

  private _isRoundTrip$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly isRoundTrip$ = this._isRoundTrip$.asObservable();

  get isRoundTrip() {
    return this._isRoundTrip$.value;
  }

  set isRoundTrip( isRoundTrip: boolean ) {
    this._isRoundTrip$.next(isRoundTrip);
  }

  private _intermediatePoints$: BehaviorSubject<Poi[]> = new BehaviorSubject<Poi[]>([]);
  public readonly intermediatePoints$ = this._intermediatePoints$.asObservable();

  private _routeCoordinates$: BehaviorSubject<WayPoint[]> = new BehaviorSubject<WayPoint[]>([]);
  public readonly routeCoordinates$ = this._routeCoordinates$.asObservable();

  private _routeLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public readonly routeLength$ = this._routeLength$.asObservable();

  private _typeToCollect$: BehaviorSubject<PoiType> = new BehaviorSubject<PoiType>(null);
  public readonly typeToCollect$ = this._typeToCollect$.asObservable();

  constructor(private _osrmService: OsrmService, private _poiService: PoiService) {
    this.startPoint$.subscribe(data => {
      this.calculateRoute();
    });
    this.endPoint$.subscribe(data => {
      this.calculateRoute();
    });
    this.intermediatePoints$.subscribe(data => {
      this.calculateRoute();
    });
    this.isRoundTrip$.subscribe(data => {
      if ( this.startPoint !== null ) {
        this.endPoint = this.startPoint;
      }
      this.calculateRoute();
    });
    this.typeToCollect$.subscribe( poiType => this._poiService.updatePoiList(poiType, this.startPoint, this.endPoint) );
  }
  public setTypeToCollect( poiType: PoiType ) {
    this._typeToCollect$.next(poiType);
  }

  public addIntermediatePoint( newPoi: Poi ) {
    if ( this._intermediatePoints$.value.filter( poi => poi.id === newPoi.id).length === 0 ) {
      this._intermediatePoints$.next([...this._intermediatePoints$.value, newPoi]);
    }
  }

  public calculateRoute(): void {

    let wayPoints: WayPoint[] = [];

    if ( this._startPoint$.value !== null) {
      wayPoints.push(this._startPoint$.value);
    }

    wayPoints = wayPoints.concat(this._intermediatePoints$.value);

    if ( !this.isRoundTrip && this.endPoint !== null ) {
      wayPoints.push(this._endPoint$.value);
    }

    this._poiService.updatePoiList(this._typeToCollect$.value, this.startPoint, this.endPoint);

    // minimally 2 point is mandatory for a route
    if (wayPoints.length < 2  ) {
      this._routeCoordinates$.next(new Array<WayPoint>());
      return;
    }
    this._osrmService.getRoute(wayPoints, this.isRoundTrip).subscribe(
      data => {
        this._routeLength$.next(data['trips'][0]['distance']);
        const latlngs =
          data['trips'][0].legs.reduce((legsArray, leg) => {
            return legsArray.concat(
              leg.steps.reduce((stepsArray, step) => {
                return stepsArray.concat(step.geometry.coordinates.map( coordinate => new WayPoint(coordinate[1], coordinate[0])));
              }, new Array<WayPoint>())
            );
          }, new Array<WayPoint>());
        this._routeCoordinates$.next(latlngs);
      },
      err => console.error(err)
    );
  }

}
