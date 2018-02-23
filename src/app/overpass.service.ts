import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OverpassService {

  constructor(private _http: HttpClient) {}

  private readonly url: String = 'http://overpass-api.de/api/interpreter/?data=[out:json];(node[{poi-group}=' +
  '{type}](bbox);way[{poi-group}={type}](bbox);rel[{poi-group}={type}](bbox));(._;%3E;);out%20center;' +
  '&bbox={left-top-longitude},{left-top-latitude},{right-bottom-longitude},{right-bottom-latitude}';

  public getPOIs(
    poiGroup: String,
    poiType: String,
    leftTopLongitude: number,
    leftTopLatitude: number,
    rightBottomLongitude: number,
    rightBottomLatitude: number
  ) {
    const url = this.url
      .replace(/\{poi-group\}/gi, poiGroup.toString())
      .replace(/\{type\}/gi, poiType.toString())
      .replace(/\{left-top-longitude\}/gi, leftTopLongitude.toString())
      .replace(/\{left-top-latitude\}/gi, leftTopLatitude.toString())
      .replace(/\{right-bottom-longitude\}/gi, rightBottomLongitude.toString())
      .replace(/\{right-bottom-latitude\}/gi, rightBottomLatitude.toString());
    return this._http.get(url);
  }

}
