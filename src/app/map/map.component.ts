import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeafletEvent, LeafletMouseEvent } from 'leaflet';
import { OsrmService} from '../osrm.service';
import { RouteService } from '../route/route.service';
import { WayPoint } from '../waypoint';
import { MapService } from './map.service';
import { PickType } from './picktype';
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
    private _mapService: MapService
  ) { }

  private markerIcon = require('../../../node_modules/leaflet/dist/images/marker-icon.png');
  private markerIconShadow = require('../../../node_modules/leaflet/dist/images/marker-shadow.png');
  
  private pickCoordintePrecision = 6;

  latitude = 47.498333;
  longitude = 19.040833;

  public intermediatePoints$: Observable<WayPoint[]>;
  public pickType: PickType;

  latlngs: any;

  public handleEvent(name: string, event: LeafletMouseEvent): void {
    if (event.latlng === undefined) {
      // somehow this event triggered twice and only the second is a real LeafletMouseEvent
      return;
    }
    switch ( this.pickType ) {
      case PickType.start:
        this._routeService.addStartPoint(
          new WayPoint(
            Number((event.latlng.lat).toFixed(this.pickCoordintePrecision)),
            Number((event.latlng.lng).toFixed(this.pickCoordintePrecision))
          )
        );
        break;
      case PickType.end:
        this._routeService.addEndPoint(
          new WayPoint(
            Number((event.latlng.lat).toFixed(this.pickCoordintePrecision)),
            Number((event.latlng.lng).toFixed(this.pickCoordintePrecision))
          )
        );
        break;
    }
    console.log(name, event, this.pickType);
  }

  ngOnInit() {
    this.intermediatePoints$ = this._routeService.intermediatePoints$;
    this._mapService.pickType$.subscribe(pickData => {
      this.pickType = pickData;
    });
    this._routeService.routeCoordinates$.subscribe(routeData => {
      this.latlngs = routeData.map( wayPoint => [wayPoint.latitude, wayPoint.longitude]);
    });

  }

}
