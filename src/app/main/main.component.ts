import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LeafletEvent, LeafletMouseEvent} from 'leaflet';
import {OsrmService} from '../osrm.service';
import { RouteService } from '../route.service';
import { WayPoint } from '../waypoint';
import {Observable, Subscriber} from 'rxjs/Rx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers: [OsrmService, RouteService]
})

export class MainComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef, private _osrmService: OsrmService, private _routeService: RouteService) { }

  private markerIcon = require('../../../node_modules/leaflet/dist/images/marker-icon.png');
  private markerIconShadow = require('../../../node_modules/leaflet/dist/images/marker-shadow.png');

  latitude = 47.498333;
  longitude = 19.040833;

  public wayPoints$: Observable<WayPoint[]>;

  public wayPoint2Add: WayPoint = new WayPoint(0, 0);

  latlngs: any;

  public handleEvent(name: string, event: LeafletMouseEvent): void {

    if (typeof event.latlng !== 'undefined') {
      this._routeService.addWayPoint( new WayPoint(event.latlng.lat, event.latlng.lng) );
    }
    console.log(name, event);
  }

  addWayPoint() {
    this._routeService.addWayPoint(new WayPoint(this.wayPoint2Add.latitude, this.wayPoint2Add.longitude) );
  }

  ngOnInit() {
    this.wayPoints$ = this._routeService.wayPoints$;
    this._routeService.routeCoordinates$.subscribe(routeData => {
      this.latlngs = routeData.map( wayPoint => [wayPoint.latitude, wayPoint.longitude]);
    });

  }

}
