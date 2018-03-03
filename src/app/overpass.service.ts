import { PoiType } from './poi/poitype';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OverpassService {

  constructor(private _http: HttpClient) {}

  private readonly url: String = 'https://lz4.overpass-api.de/api/interpreter/?data=[out:json];(node[{poi-group}=' +
  '{type}](bbox));(._;%3E;);out%20center;' +
  '&bbox={left-bottom-longitude},{left-bottom-latitude},{right-top-longitude},{right-top-latitude}';
  public getPOIs(
    poiType: PoiType,
    leftBottomLongitude: number,
    leftBottomLatitude: number,
    rightTopLongitude: number,
    rightTopLatitude: number
  ) {
    const url = this.url
      .replace(/\{poi-group\}/gi, poiType.category.id.toString())
      .replace(/\{type\}/gi, poiType.id.toString())
      .replace(/\{left-bottom-longitude\}/gi, leftBottomLongitude.toString())
      .replace(/\{left-bottom-latitude\}/gi, leftBottomLatitude.toString())
      .replace(/\{right-top-longitude\}/gi, rightTopLongitude.toString())
      .replace(/\{right-top-latitude\}/gi, rightTopLatitude.toString());
    return this._http.get(url);
  }

}
