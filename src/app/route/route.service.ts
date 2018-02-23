import { OsrmService } from '../osrm.service';
import { WayPoint } from '../waypoint';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class RouteService {

  private _startPoint$: BehaviorSubject<WayPoint> = new BehaviorSubject<WayPoint>(null);
  public readonly startPoint$ = this._startPoint$.asObservable();

  get startPoint() {
    return this._startPoint$.value;
  }

  private _endPoint$: BehaviorSubject<WayPoint> = new BehaviorSubject<WayPoint>(null);
  public readonly endPoint$ = this._endPoint$.asObservable();

  get endPoint() {
    return this._endPoint$.value;
  }

  private _intermediatePoints$: BehaviorSubject<WayPoint[]> = new BehaviorSubject<WayPoint[]>([]);
  public readonly intermediatePoints$ = this._intermediatePoints$.asObservable();

  private _roundtrip$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly roundtrip$ = this._roundtrip$.asObservable();

  private _routeCoordinates$: BehaviorSubject<WayPoint[]> = new BehaviorSubject<WayPoint[]>([]);
  public readonly routeCoordinates$ = this._routeCoordinates$.asObservable();

  constructor(private _osrmService: OsrmService) {
    this.startPoint$.subscribe(data => {
      this.calculateRoute();
    });
    this.endPoint$.subscribe(data => {
      this.calculateRoute();
    });
    this.intermediatePoints$.subscribe(data => {
      this.calculateRoute();
    });
    this.roundtrip$.subscribe(data => {
      this.calculateRoute();
    });
  }

  public addintermediatePoint( wayPoint: WayPoint ) {
    this._intermediatePoints$.next([...this._intermediatePoints$.value, wayPoint]);
  }

  public addStartPoint( wayPoint: WayPoint ) {
    this._startPoint$.next(wayPoint);
  }

  public addEndPoint( wayPoint: WayPoint ) {
    this._endPoint$.next(wayPoint);
  }

  public calculateRoute(): void {
    const wayPoints = [];

    if ( this._startPoint$.value !== null) {
      wayPoints.push(this._startPoint$.value);
    }

    wayPoints.concat(this._intermediatePoints$.value);

    if ( !this._roundtrip$.value && this._endPoint$.value !== null ) {
      wayPoints.push(this._endPoint$.value);
    }

    // minimally 2 point is mandatory for a route
    if (wayPoints.length < 2 ) { return; }
    this._osrmService.getRoute(wayPoints, this._roundtrip$.value).subscribe(
      data => {
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
