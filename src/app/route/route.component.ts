import { MapService } from '../map/map.service';
import { PickType } from '../map/picktype';
import { PoiCategory } from '../poi-category';
import { PoiCategoryAmenity } from '../poi-category-amenity';
import { PoiCategoryLeisure } from '../poi-category-leisure';
import { PoiCategoryTourism } from '../poi-category-tourism';
import { PoiService } from '../poi.service';
import { PoiType } from '../poitype';
import { WayPoint } from '../waypoint';
import { RouteService } from './route.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.less']
})
export class RouteComponent implements OnInit {

  constructor(private _mapService: MapService, private _routeService: RouteService, private _poiService: PoiService) {}

  pickStartIsDisabled = false;
  pickEndIsDisabled = false;

  pickStartButton = false;
  pickEndButton = false;

  private _startPoint: WayPoint = null;
  private _endPoint: WayPoint = null;

  private _poiTypeToShow: PoiType;

  get poiTypeToCollect() {
    return this._poiTypeToShow;
  }

  set poiTypeToCollect( poiType: PoiType ) {
    this._poiService.setTypeToCollect(poiType);
  }

  private _poiCategories: PoiCategory[] = [new PoiCategoryAmenity(), new PoiCategoryTourism(), new PoiCategoryLeisure()];

  get poiCategories() {
    return this._poiCategories;
  }

  get startPoint() {
    if ( this._startPoint === null ) { return ''; }
    return this._startPoint.longitude + ',' + this._startPoint.latitude;
  }

  get endPoint() {
    if ( this._endPoint === null ) { return ''; }
    return this._endPoint.longitude + ',' + this._endPoint.latitude;
  }

  public pickStartChange( event: MatButtonToggleChange ) {
    this.pickStartButton = event.source.checked;
    this.pickEndButton = false;
    if (this.pickStartButton) {
      this._mapService.setPickType(PickType.start);
    } else {
      this._mapService.resetPickType();
    }
  }

  public pickEndChange( event: MatButtonToggleChange ) {
    this.pickEndButton = event.source.checked;
    this.pickStartButton = false;
    if (this.pickEndButton) {
      this._mapService.setPickType(PickType.end);
    } else {
      this._mapService.resetPickType();
    }
  }

//  private populatePoiMenu() {
//    this.poiCategories['amenity'] = [];
//    for (const item in PoiAmenityEnum) {
//      if (PoiAmenityEnum.hasOwnProperty(item)) {
//        this.poiCategories['amenity'].push( new PoiType( item, PoiAmenityEnum, PoiAmenityEnum[item]));
//      }
//    }
//    this.poiCategories['tourism'] = [];
//    for (const item in PoiCategoryTourism) {
//      if (PoiCategoryTourism.hasOwnProperty(item)) {
//        this.poiCategories['tourism'].push( new PoiType( item, PoiCategoryTourism, PoiCategoryTourism[item]));
//      }
//    }
//    this.poiCategories['leisure'] = [];
//    for (const item in PoiLeisureEnum) {
//      if (PoiLeisureEnum.hasOwnProperty(item)) {
//        this.poiCategories['leisure'].push( new PoiType( item, PoiLeisureEnum, PoiLeisureEnum[item]));
//      }
//    }
//  }

  ngOnInit() {
    this._routeService.startPoint$.subscribe(startPoint => {
      this._startPoint = startPoint;
    });
    this._routeService.endPoint$.subscribe(endPoint => {
      this._endPoint = endPoint;
    });
    this._poiService.typeToCollect$.subscribe(poiType => {
      this._poiTypeToShow = poiType;
    });
//    this.populatePoiMenu();
  }

}
