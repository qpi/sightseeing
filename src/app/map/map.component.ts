import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LeafletEvent, LeafletMouseEvent, point} from 'leaflet';
import { OsrmService} from '../osrm.service';
import { Poi } from '../poi/poi';
import { PoiService } from '../poi/poi.service';
import { RouteService } from '../route/route.service';
import { WayPoint } from '../waypoint';
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
    private _poiService: PoiService
  ) { }

  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  private markerIcon = require('../../assets/marker-icon.png');
  private markerIconGreen = require('../../assets/marker-icon-green.png');
  private markerIconYellow = require('../../assets/marker-icon-yellow.png');
  private markerIconRed = require('../../assets/marker-icon-red.png');
  private markerIconShadow = require('../../assets/marker-shadow.png');

  private pickCoordintePrecision = 6;

  latitude = 47.498333;
  longitude = 19.040833;

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
