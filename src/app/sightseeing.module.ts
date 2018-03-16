import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YagaModule } from '@yaga/leaflet-ng2';
import { SightseeingRoutingModule } from './sightseeing-routing.module';
import { SightseeingComponent } from './sightseeing.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { OsrmService } from './route/osrm.service';
import { OverpassService } from './poi/overpass.service';
import { PoiService } from './poi/poi.service';
import { RouteComponent } from './route/route.component';
import { RouteService } from './route/route.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyRoutesComponent } from './my-routes/my-routes.component';
import { CommunityRoutesComponent } from './community-routes/community-routes.component';
import { MapService } from './map/map.service';


@NgModule({
  declarations: [
    SightseeingComponent,
    MapComponent,
    RouteComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    MyRoutesComponent,
    CommunityRoutesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    SightseeingRoutingModule,
    YagaModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RouteService,
    OsrmService,
    PoiService,
    OverpassService,
    AuthGuard,
    AuthService, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    MapService],
  bootstrap: [SightseeingComponent]
})
export class SightseeingModule {}
