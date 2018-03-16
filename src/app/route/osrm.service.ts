import {WayPoint} from '../poi/waypoint';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OsrmService {

  constructor(private _http: HttpClient) {}

  private readonly urlPrefix = 'https://router.project-osrm.org/trip/v1/foot/';
  private readonly urlPostfix = '?source=first&geometries=geojson&annotations=true&destination=last&steps=true';

  public getUrl(wayPoints: WayPoint[], roundtrip: boolean): string {
    return wayPoints.reduce(
      (url, wayPoint) => url + wayPoint.longitude + ',' + wayPoint.latitude + ';', this.urlPrefix
    ).slice(0, -1) + this.urlPostfix + '&roundtrip=' + roundtrip;
  }

  public getRoute(wayPoints: WayPoint[], roundtrip: boolean) {
    return this._http.get(this.getUrl(wayPoints, roundtrip));
  }
}
