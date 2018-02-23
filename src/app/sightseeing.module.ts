import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YagaModule } from '@yaga/leaflet-ng2';
import { SightseeingRoutingModule } from './sightseeing-routing.module';
import { SightseeingComponent } from './sightseeing.component';
import { MaterialModule } from './material.module';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { MapService } from './map/map.service';
import { OsrmService } from './osrm.service';
import { OverpassService } from './overpass.service';
import { PoiService } from './poi.service';
import { RouteComponent } from './route/route.component';
import { RouteService } from './route/route.service';


@NgModule({
  declarations: [
    SightseeingComponent,
    MapComponent,
    RouteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SightseeingRoutingModule,
    YagaModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MapService, RouteService, OsrmService, PoiService, OverpassService],
  bootstrap: [SightseeingComponent]
})
export class SightseeingModule {}
