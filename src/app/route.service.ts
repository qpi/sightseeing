import { OsrmService } from './osrm.service';
import { WayPoint } from './waypoint';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class RouteService {

  private _wayPoints$: BehaviorSubject<WayPoint[]> = new BehaviorSubject<WayPoint[]>([]);
  public readonly wayPoints$ = this._wayPoints$.asObservable();

  private _routeCoordinates$: BehaviorSubject<WayPoint[]> = new BehaviorSubject<WayPoint[]>([]);
  public readonly routeCoordinates$ = this._routeCoordinates$.asObservable();


//    new WayPoint(51.532493, -0.111371),
//      new WayPoint(51.49022, -0.1209),
//      new WayPoint(51.48649268634311, -0.088069876802801),
//      new WayPoint(51.45834, -0.127736)

  constructor(private _osrmService: OsrmService) {
    this.wayPoints$.subscribe(data => {
      console.log(data);
      this.calculateRoute();
    });
  }

  public addWayPoint( wayPoint: WayPoint ) {
    this._wayPoints$.next([...this._wayPoints$.value, wayPoint]);
  }

  public calculateRoute(): void {
    this._osrmService.getRoute(this._wayPoints$.value).subscribe(
      data => {
        const latlngs =
          data['trips'][0].legs.reduce((legsArray, leg) => {
            return legsArray.concat(
              leg.steps.reduce((stepsArray, step) => {
                console.log(stepsArray, step.intersections.map(intersection =>
                  new WayPoint(intersection.location[1], intersection.location[0])));
                return stepsArray.concat(step.intersections.map(
                  intersection => new WayPoint(intersection.location[1], intersection.location[0])
                ));
              }, new Array<WayPoint>())
            );
          }, new Array<WayPoint>());
        this._routeCoordinates$.next(latlngs);
      },
      err => console.error(err)
    );
  }

}
