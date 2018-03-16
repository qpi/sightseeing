import { MapService } from '../map/map.service';
import { OsrmService } from './osrm.service';
import { Poi } from '../poi/poi';
import { PoiService } from '../poi/poi.service';
import { PoiType } from '../poi/poitype';
import { WayPoint } from '../poi/waypoint';
import { SightseeingRoute } from './sightseeing-route';
import { Injectable, Injector } from '@angular/core';
import { Observable, BehaviorSubject, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class RouteService {

  private _awsBaseUrl = 'https://4yba8m413d.execute-api.eu-central-1.amazonaws.com/dev/route';

  private _loadingInProgress = false;

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

  constructor(
    private _http: HttpClient,
    private _osrmService: OsrmService,
    private _poiService: PoiService,
    private _mapService: MapService,
    public snackBar: MatSnackBar
  ) {
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

  public emptyRoute( resetMap: boolean): void {
    this._loadingInProgress = true;
    this._typeToCollect$.next(null);
    this._poiService.emptyPoiList();
    this._startPoint$.next(null);
    this._endPoint$.next(null);
    this._intermediatePoints$.next(new Array<Poi>());
    this._isRoundTrip$.next(false);
    this._routeLength$.next(0);
    this._routeCoordinates$.next(new Array<WayPoint>());
    if ( resetMap ) {
      // it sets back the map to Budapest
      this._mapService.reset();
    }
    setTimeout(() => {
      // this flag is necessary because the subscriptions can trigger each other triggering the calculateRoute()
      this._loadingInProgress = false;
    }, 500);
  }

  public loadRoute( route: SightseeingRoute ): void {
    this._loadingInProgress = true;
    this._routeLength$.next(route.routeLength);
    this._isRoundTrip$.next(route.isRoundTrip);
    this._intermediatePoints$.next(route.intermediatePoints);
    this._startPoint$.next(route.startPoint);
    this._endPoint$.next(route.endPoint);
    if ( route.mapLatitude ) {
      this._mapService.latitude = route.mapLatitude;
    }
    if ( route.mapLongitude ) {
      this._mapService.longitude = route.mapLongitude;
    }
    if ( route.mapZoom ) {
      this._mapService.zoom = route.mapZoom;
    }
    // this needs becasue if before the load there were POI to show it will be visible
    this._typeToCollect$.next(null);
    setTimeout(() => {
      this._loadingInProgress = false;
      this.calculateRoute();
    }, 500);
  }

  public saveRoute( name: string ): Observable<Object> {
    const route: SightseeingRoute = new SightseeingRoute({
      name: name,
      startPoint: this._startPoint$.value,
      intermediatePoints: this._intermediatePoints$.value,
      endPoint: this._endPoint$.value,
      isRoundTrip: this._isRoundTrip$.value,
      routeLength: this._routeLength$.value,
      mapLatitude: this._mapService.latitude,
      mapLongitude: this._mapService.longitude,
      mapZoom: this._mapService.zoom
    });

    return Observable.create((observer: Observer<SightseeingRoute>) => {
      this._http.post( this._awsBaseUrl, route ).subscribe( (result: Object) => {
        if ( result['statusCode'] && result['statusCode'] === 201 ) {
          observer.next(new SightseeingRoute(result['body']));
          observer.complete();
        } else {
          observer.error(result);
        }
      }, error => {
        observer.error(error);
      });
    });
  }

  public getRoutes( others: boolean): Observable<SightseeingRoute[]> {
    return Observable.create((observer: Observer<Object>) => {
      this._http.get( this._awsBaseUrl + '/' + ( others ? 'others' : 'my' )).subscribe( (result: Object) => {
        if ( result['statusCode'] && result['statusCode'] === 200 ) {
          const routes = result['body'].map( route => {
            return new SightseeingRoute(route);
          });
          observer.next(routes);
          observer.complete();
        } else {
          observer.error(result);
        }
      }, error => {
        observer.error(error);
      });
    });
  }

  public calculateRoute(): void {

    if ( this._loadingInProgress ) {
      // it needs to avoid the multiple server call because the subscriptions triggers
      return;
    }

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
      error => {
        if ( error.status === 429 ) {
          this.snackBar.open(
            'Sorry, we reached the rate limit of the planning service. Please wait a minute and continue after your route planning',
            'close',
            {duration: 5000}
          );
        } else {
          this.snackBar.open(
            'Sorry, unexpectied error happend while called the planning service.',
            'close',
            {duration: 5000}
          );
        }
      }
    );
  }

}
