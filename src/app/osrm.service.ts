import {WayPoint} from './waypoint';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OsrmService {

  constructor(private _http: HttpClient) {}

  private urlPrefix = 'http://router.project-osrm.org/trip/v1/foot/';
  private urlPostfix = '?source=first&destination=last&steps=true&roundtrip=false';

  public getUrl(wayPoints: WayPoint[]): string {
    return wayPoints.reduce(
      (url, wayPoint) => url + wayPoint.longitude + ',' + wayPoint.latitude + ';', this.urlPrefix
    ).slice(0, -1) + this.urlPostfix;
  }

  public getRoute(wayPoints: WayPoint[]) {
    return this._http.get(this.getUrl(wayPoints));
  }
}
