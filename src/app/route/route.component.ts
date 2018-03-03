import { PickType } from '../map/picktype';
import { Poi } from '../poi/poi';
import { PoiCategory } from '../poi/poi-category';
import { PoiCategoryAmenity } from '../poi/poi-category-amenity';
import { PoiCategoryLeisure } from '../poi/poi-category-leisure';
import { PoiCategoryTourism } from '../poi/poi-category-tourism';
import { PoiService } from '../poi/poi.service';
import { PoiType } from '../poi/poitype';
import { WayPoint } from '../waypoint';
import { RouteService } from './route.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.less']
})
export class RouteComponent implements OnInit {

  constructor(private _routeService: RouteService, private _poiService: PoiService) {}

  public freeTimeField: FormControl = new FormControl();

  private _startPoint: WayPoint = null;
  private _endPoint: WayPoint = null;
  private _intermediatePoints: Poi[] = new Array<Poi>();
  private _isRoundTrip = false;
  private _routeLength = 0;
  private _routeDuration = 0;
  private _poiTypeToShow: PoiType;

  get poiTypeToCollect() {
    return this._poiTypeToShow;
  }

  set poiTypeToCollect( poiType: PoiType ) {
    if ( poiType === undefined ) {
      poiType = null;
    }
    this._routeService.setTypeToCollect(poiType);
  }

  private _poiCategories: PoiCategory[] = [new PoiCategoryAmenity(), new PoiCategoryTourism(), new PoiCategoryLeisure()];

  get poiCategories() { return this._poiCategories; }

  get startPoint() {
    if ( this._startPoint === null ) { return ''; }
    return this._startPoint.longitude + ',' + this._startPoint.latitude;
  }

  get endPoint() {
    if ( this._endPoint === null ) { return ''; }
    return this._endPoint.longitude + ',' + this._endPoint.latitude;
  }

  get intermediatePoints() {
    return this._intermediatePoints;
  }

  get isRoundTrip() {
    return this._isRoundTrip;
  }

  set isRoundTrip(isRoundTrip: boolean) {
    this._routeService.isRoundTrip = isRoundTrip;
  }

  get routeLength() {
    return this._routeLength;
  }

  get routeDuration() {
    const minutes = Math.round( this._routeDuration % 60 );
    const hours = Math.round( (this._routeDuration - minutes) / 60 );
    return ( hours > 0 ? hours.toString() + ' hour' + ( hours > 1 ? 's ' : ' ') : '' ) +
      ( minutes > 0 ? minutes.toString() + ' minute' + ( minutes > 1 ? 's' : '') : '' );
  }

  public checkEnoughTime( freeTime ) {
    if ( freeTime === null ) { return; }
    if ( freeTime < this._routeDuration ) {
      this.freeTimeField.setErrors({'notenoughtime': true});
    }
  }

  ngOnInit() {
    this._routeService.routeLength$.subscribe(routeLength => {
      this._routeLength = Math.round( routeLength );
      this._routeDuration = routeLength / (this._routeService.walkingSpeed * 60);
      this.checkEnoughTime(this.freeTimeField.value);
    });
    this._routeService.startPoint$.subscribe(startPoint => {
      this._startPoint = startPoint;
    });
    this._routeService.endPoint$.subscribe(endPoint => {
      this._endPoint = endPoint;
    });
    this._routeService.intermediatePoints$.subscribe( pois => {
      this._intermediatePoints = pois;
    });
    this._routeService.isRoundTrip$.subscribe( isRoundTrip => {
      this._isRoundTrip = isRoundTrip;
    });
    this._routeService.typeToCollect$.subscribe( poiType => {
      this._poiTypeToShow = poiType;
    });
    this.freeTimeField
      .valueChanges
      .debounceTime(400)
      .subscribe( freeTime => {
        this.checkEnoughTime(freeTime);
      });
  }
}
