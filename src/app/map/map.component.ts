import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LeafletEvent, LeafletMouseEvent, point} from 'leaflet';
import { OsrmService} from '../route/osrm.service';
import { Poi } from '../poi/poi';
import { PoiService } from '../poi/poi.service';
import { RouteService } from '../route/route.service';
import { WayPoint } from '../poi/waypoint';
import { MapService } from './map.service';
import { PickType } from './picktype';
import { MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { Observable, Subscriber} from 'rxjs/Rx';
import { SwitchStatement } from 'typescript';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
    private _osrmService: OsrmService,
    private _routeService: RouteService,
    private _poiService: PoiService,
    private _mapService: MapService
  ) { }

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  public markerIcon = require('../../assets/marker-icon.png');
  public markerIconGreen = require('../../assets/marker-icon-green.png');
  public markerIconYellow = require('../../assets/marker-icon-yellow.png');
  public markerIconRed = require('../../assets/marker-icon-red.png');
  public markerIconShadow = require('../../assets/marker-shadow.png');

  public mapModel;

  private pickCoordintePrecision = 6;

  get latitude() {
    return this._mapService.latitude;
  }

  set latitude( value: number) {
    this._mapService.latitude = value;
  }

  get longitude() {
    return this._mapService.longitude;
  }

  set longitude( value: number) {
    this._mapService.longitude = value;
  }

  get zoom() {
    return this._mapService.zoom;
  }

  set zoom( value: number) {
    this._mapService.zoom = value;
  }

//  public latitude$: Observable<number>;
//  public longitude$: Observable<number>;
//  public zoom$: Observable<number>;

  public startPoint$: Observable<WayPoint>;
  public intermediatePoints$: Observable<Poi[]>;
  public endPoint$: Observable<WayPoint>;
  private _isRoundTrip: boolean;

  get isRoundTrip() {
    return this._isRoundTrip;
  }

  public pickPointForContextMenu: WayPoint = null;

//  public pickType: PickType;
  public poiList: Poi[] = new Array<Poi>();

  latlngs: any;

  public addIntermediatePoint(event, poi: Poi) {
    this._routeService.addIntermediatePoint(poi);
  }

  public handleEvent(event: LeafletMouseEvent): void {
    if (event.latlng === undefined) {
      // somehow this event triggered twice and only the second is a real LeafletMouseEvent
      return;
    }
    event.originalEvent.preventDefault();

    const menu = document.getElementById('contextMenuButton');
    menu.style.display = '';
    menu.style.position = 'absolute';
    menu.style.left = event.containerPoint.x + 5 + 'px';
    menu.style.top = event.containerPoint.y + 5 + 'px';

    this.pickPointForContextMenu = new WayPoint(
      Number((event.latlng.lat).toFixed(this.pickCoordintePrecision)),
      Number((event.latlng.lng).toFixed(this.pickCoordintePrecision))
    );

    this.contextMenu.openMenu();

  }

  public setStartPoint( wayPoint: WayPoint ) {
    this._routeService.startPoint = wayPoint;
  }

  public setEndPoint( wayPoint: WayPoint ) {
    this._routeService.endPoint = wayPoint;
  }

  onContextMenuClosed(): void {
    const menu = document.getElementById('contextMenuButton');
    if (menu) {
        menu.style.display = 'none';
    }
  }

  ngOnInit() {
//
//    this.latitude$ = this._mapService.latitude$;
//    this.longitude$ = this._mapService.longitude$;
//    this.zoom$ = this._mapService.zoom$;

    this.startPoint$ = this._routeService.startPoint$;
    this.intermediatePoints$ = this._routeService.intermediatePoints$;
    this.endPoint$ = this._routeService.endPoint$;
    this._routeService.isRoundTrip$.subscribe( isRoundTrip => this._isRoundTrip = isRoundTrip );
    this._routeService.routeCoordinates$.subscribe(routeData => {
     this.latlngs = routeData
       .map( wayPoint => [wayPoint.latitude, wayPoint.longitude]);
    });
    this._poiService.poiList$.subscribe(poiList => {
      this.poiList = poiList;
    });
  }

}
