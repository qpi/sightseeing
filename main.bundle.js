webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"contextMenu\" id=\"contextMenuButton\" style=\"display:none;\">Menu</button>\n<mat-menu #contextMenu=\"matMenu\" (close)=\"onContextMenuClosed()\">\n\t<button mat-menu-item (click)=\"setStartPoint(pickPointForContextMenu)\">Route from here</button>\n\t<button mat-menu-item (click)=\"setEndPoint(pickPointForContextMenu)\">Route to here</button>\n</mat-menu>\n<yaga-map [zoom]=\"11\" [lat]=latitude [lng]=longitude [minZoom]=\"1\"\n[maxZoom]=\"16\"\n(contextmenu)=\"handleEvent($event);\">\n\t<yaga-zoom-control></yaga-zoom-control>\n\t<yaga-scale-control [metric]=\"true\" [imperial]=\"false\"></yaga-scale-control>\n\t<ng-container *ngIf=\"startPoint$ | async; let wayPoint;\">\n\t\t<yaga-marker [lat]=wayPoint.latitude [lng]=wayPoint.longitude>\n\t\t\t<yaga-icon [iconUrl]=\"markerIconRed\"\n\t\t\t\t[iconSize]=\"[25, 41]\"\n\t\t\t\t[iconAnchor]=\"[13, 41]\"\n\t\t\t\t[shadowUrl]=markerIconShadow></yaga-icon>\n\t\t\t<yaga-popup>This is the start point</yaga-popup>\n\t\t</yaga-marker>\n\t</ng-container>\n\t<ng-container *ngIf=\"endPoint$ | async; let wayPoint;\">\n\t\t<yaga-marker [lat]=wayPoint.latitude [lng]=wayPoint.longitude>\n\t\t\t<yaga-icon [iconUrl]=\"markerIconGreen\"\n\t\t\t\t[iconSize]=\"[25, 41]\"\n\t\t\t\t[iconAnchor]=\"[13, 41]\"\n\t\t\t\t[shadowUrl]=markerIconShadow></yaga-icon>\n\t\t\t<yaga-popup>This is the end point</yaga-popup>\n\t\t</yaga-marker>\n\t</ng-container>\n\t<ng-container *ngIf=\"!endPoint$ | async\">\n\t</ng-container>\n\t<ng-container *ngFor=\"let poi of intermediatePoints$ | async\">\n\t\t<yaga-marker [lat]=poi.latitude [lng]=poi.longitude>\n\t\t\t<yaga-icon [iconUrl]=markerIcon\n\t\t\t\t[iconSize]=\"[25, 41]\"\n\t\t\t\t[iconAnchor]=\"[13, 41]\"\n\t\t\t\t[shadowUrl]=markerIconShadow></yaga-icon>\n\t\t\t<yaga-popup>{{ poi.type.category.name }}/{{ poi.type.title }}<br>{{ poi.name }}</yaga-popup>\n\t\t</yaga-marker>\n\t</ng-container>\n\t<ng-container *ngFor=\"let poi of poiList\">\n\t\t<yaga-marker [lat]=poi.latitude [lng]=poi.longitude>\n\t\t\t<yaga-icon [iconUrl]=\"markerIconYellow\"\n\t\t\t\t[iconSize]=\"[25, 41]\"\n\t\t\t\t[iconAnchor]=\"[13, 41]\"\n\t\t\t\t[shadowUrl]=markerIconShadow></yaga-icon>\n\t\t\t<yaga-popup>\n\t\t\t\t{{poi.name}}<br>\n\t\t\t\t<button mat-button color=\"primary\" (click)=\"addIntermediatePoint($event, poi)\">add to route</button>\n\t\t\t</yaga-popup>\n\t\t</yaga-marker>\n\t</ng-container>\n\t<yaga-polyline [latLngs]=latlngs></yaga-polyline>\n\t<yaga-tile-layer [url]=\"'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'\"></yaga-tile-layer>\n</yaga-map>"

/***/ }),

/***/ "../../../../../src/app/map/map.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".yaga-map {\n  min-height: 91vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__osrm_service__ = __webpack_require__("../../../../../src/app/osrm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poi_poi_service__ = __webpack_require__("../../../../../src/app/poi/poi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_route_service__ = __webpack_require__("../../../../../src/app/route/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__waypoint__ = __webpack_require__("../../../../../src/app/waypoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapComponent = /** @class */ (function () {
    function MapComponent(cd, _osrmService, _routeService, _poiService) {
        this.cd = cd;
        this._osrmService = _osrmService;
        this._routeService = _routeService;
        this._poiService = _poiService;
        this.markerIcon = __webpack_require__("../../../../../src/assets/marker-icon.png");
        this.markerIconGreen = __webpack_require__("../../../../../src/assets/marker-icon-green.png");
        this.markerIconYellow = __webpack_require__("../../../../../src/assets/marker-icon-yellow.png");
        this.markerIconRed = __webpack_require__("../../../../../src/assets/marker-icon-red.png");
        this.markerIconShadow = __webpack_require__("../../../../../src/assets/marker-shadow.png");
        this.pickCoordintePrecision = 6;
        this.latitude = 47.498333;
        this.longitude = 19.040833;
        this.pickPointForContextMenu = null;
        //  public pickType: PickType;
        this.poiList = new Array();
    }
    MapComponent.prototype.addIntermediatePoint = function (event, poi) {
        this._routeService.addIntermediatePoint(poi);
    };
    MapComponent.prototype.handleEvent = function (event) {
        if (event.latlng === undefined) {
            // somehow this event triggered twice and only the second is a real LeafletMouseEvent
            return;
        }
        event.originalEvent.preventDefault();
        var menu = document.getElementById('contextMenuButton');
        menu.style.display = '';
        menu.style.position = 'absolute';
        menu.style.left = event.containerPoint.x + 5 + 'px';
        menu.style.top = event.containerPoint.y + 5 + 'px';
        this.pickPointForContextMenu = new __WEBPACK_IMPORTED_MODULE_4__waypoint__["a" /* WayPoint */](Number((event.latlng.lat).toFixed(this.pickCoordintePrecision)), Number((event.latlng.lng).toFixed(this.pickCoordintePrecision)));
        console.log(this.contextMenu);
        this.contextMenu.openMenu();
    };
    MapComponent.prototype.setStartPoint = function (wayPoint) {
        this._routeService.addStartPoint(wayPoint);
    };
    MapComponent.prototype.setEndPoint = function (wayPoint) {
        this._routeService.addEndPoint(wayPoint);
    };
    MapComponent.prototype.onContextMenuClosed = function () {
        var menu = document.getElementById('contextMenuButton');
        if (menu) {
            menu.style.display = 'none';
        }
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startPoint$ = this._routeService.startPoint$;
        this.intermediatePoints$ = this._routeService.intermediatePoints$;
        this.endPoint$ = this._routeService.endPoint$;
        this._routeService.routeCoordinates$.subscribe(function (routeData) {
            _this.latlngs = routeData
                .map(function (wayPoint) { return [wayPoint.latitude, wayPoint.longitude]; });
        });
        this._poiService.poiList$.subscribe(function (poiList) {
            _this.poiList = poiList;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material_menu__["b" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__["b" /* MatMenuTrigger */])
    ], MapComponent.prototype, "contextMenu", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__osrm_service__["a" /* OsrmService */],
            __WEBPACK_IMPORTED_MODULE_3__route_route_service__["a" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_2__poi_poi_service__["a" /* PoiService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSnackBarModule */]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());

//    CdkTableModule,
//    MatAutocompleteModule,
//    MatButtonModule,
//    MatButtonToggleModule,
//    MatCardModule,
//    MatCheckboxModule,
//    MatChipsModule,
//    MatStepperModule,
//    MatDatepickerModule,
//    MatDialogModule,
//    MatExpansionModule,
//    MatGridListModule,
//    MatIconModule,
//    MatInputModule,
//    MatListModule,
//    MatMenuModule,
//    MatNativeDateModule,
//    MatPaginatorModule,
//    MatProgressBarModule,
//    MatProgressSpinnerModule,
//    MatRadioModule,
//    MatRippleModule,
//    MatSelectModule,
//    MatSidenavModule,
//    MatSliderModule,
//    MatSlideToggleModule,
//    MatSnackBarModule,
//    MatSortModule,
//    MatTableModule,
//    MatTabsModule,
//    MatToolbarModule,
//    MatTooltipModule


/***/ }),

/***/ "../../../../../src/app/osrm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OsrmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OsrmService = /** @class */ (function () {
    function OsrmService(_http) {
        this._http = _http;
        this.urlPrefix = 'https://router.project-osrm.org/trip/v1/foot/';
        this.urlPostfix = '?source=first&geometries=geojson&annotations=true&destination=last&steps=true';
    }
    OsrmService.prototype.getUrl = function (wayPoints, roundtrip) {
        return wayPoints.reduce(function (url, wayPoint) { return url + wayPoint.longitude + ',' + wayPoint.latitude + ';'; }, this.urlPrefix).slice(0, -1) + this.urlPostfix + '&roundtrip=' + roundtrip;
    };
    OsrmService.prototype.getRoute = function (wayPoints, roundtrip) {
        return this._http.get(this.getUrl(wayPoints, roundtrip));
    };
    OsrmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OsrmService);
    return OsrmService;
}());



/***/ }),

/***/ "../../../../../src/app/overpass.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverpassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverpassService = /** @class */ (function () {
    function OverpassService(_http) {
        this._http = _http;
        this.url = 'https://lz4.overpass-api.de/api/interpreter/?data=[out:json];(node[{poi-group}=' +
            '{type}](bbox));(._;%3E;);out%20center;' +
            '&bbox={left-bottom-longitude},{left-bottom-latitude},{right-top-longitude},{right-top-latitude}';
    }
    OverpassService.prototype.getPOIs = function (poiType, leftBottomLongitude, leftBottomLatitude, rightTopLongitude, rightTopLatitude) {
        var url = this.url
            .replace(/\{poi-group\}/gi, poiType.category.id.toString())
            .replace(/\{type\}/gi, poiType.id.toString())
            .replace(/\{left-bottom-longitude\}/gi, leftBottomLongitude.toString())
            .replace(/\{left-bottom-latitude\}/gi, leftBottomLatitude.toString())
            .replace(/\{right-top-longitude\}/gi, rightTopLongitude.toString())
            .replace(/\{right-top-latitude\}/gi, rightTopLatitude.toString());
        return this._http.get(url);
    };
    OverpassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OverpassService);
    return OverpassService;
}());



/***/ }),

/***/ "../../../../../src/app/poi/poi-category-amenity-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryAmenityEnum; });
var PoiCategoryAmenityEnum;
(function (PoiCategoryAmenityEnum) {
    PoiCategoryAmenityEnum["bank"] = "Bank";
    PoiCategoryAmenityEnum["bench"] = "Bench";
    PoiCategoryAmenityEnum["bicycle_parking"] = "Bicycle Parking";
    PoiCategoryAmenityEnum["bicycle_rental"] = "Bicycle Rental";
    PoiCategoryAmenityEnum["cinema"] = "Cinema";
    PoiCategoryAmenityEnum["clinic"] = "Clinic";
    PoiCategoryAmenityEnum["embassy"] = "Embassy";
    PoiCategoryAmenityEnum["fuel"] = "Fuel Station";
    PoiCategoryAmenityEnum["hospital"] = "Hospital";
    PoiCategoryAmenityEnum["library"] = "Library";
    PoiCategoryAmenityEnum["music_school"] = "Music School";
    PoiCategoryAmenityEnum["parking"] = "Parking";
    PoiCategoryAmenityEnum["pharmacy"] = "Pharmacy";
    PoiCategoryAmenityEnum["police"] = "Police";
    PoiCategoryAmenityEnum["post_office"] = "Post Office";
    PoiCategoryAmenityEnum["taxi"] = "Taxi Station";
    PoiCategoryAmenityEnum["theatre"] = "Theatre";
    PoiCategoryAmenityEnum["toilets"] = "Toilets";
    PoiCategoryAmenityEnum["university"] = "University";
    PoiCategoryAmenityEnum["place_of_worship"] = "Curch";
    PoiCategoryAmenityEnum["bar"] = "Bar";
    PoiCategoryAmenityEnum["bbq"] = "BBQ restaurant";
    PoiCategoryAmenityEnum["biergarten"] = "Biergarten";
    PoiCategoryAmenityEnum["cafe"] = "Cafe";
    PoiCategoryAmenityEnum["fast_food"] = "Fast Food";
    PoiCategoryAmenityEnum["food_court"] = "Food Court";
    PoiCategoryAmenityEnum["ice_cream"] = "Icecream";
    PoiCategoryAmenityEnum["pub"] = "Pub";
    PoiCategoryAmenityEnum["restaurant"] = "Restaurant";
    PoiCategoryAmenityEnum["casino"] = "Casino";
})(PoiCategoryAmenityEnum || (PoiCategoryAmenityEnum = {}));


/***/ }),

/***/ "../../../../../src/app/poi/poi-category-amenity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryAmenity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poi_category_amenity_enum__ = __webpack_require__("../../../../../src/app/poi/poi-category-amenity-enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi_category__ = __webpack_require__("../../../../../src/app/poi/poi-category.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PoiCategoryAmenity = /** @class */ (function (_super) {
    __extends(PoiCategoryAmenity, _super);
    function PoiCategoryAmenity() {
        var _this = _super.call(this, 'amenity', 'Amenity') || this;
        _this.setEnum(__WEBPACK_IMPORTED_MODULE_0__poi_category_amenity_enum__["a" /* PoiCategoryAmenityEnum */]);
        return _this;
    }
    return PoiCategoryAmenity;
}(__WEBPACK_IMPORTED_MODULE_1__poi_category__["a" /* PoiCategory */]));



/***/ }),

/***/ "../../../../../src/app/poi/poi-category-leisure-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryLeisureEnum; });
var PoiCategoryLeisureEnum;
(function (PoiCategoryLeisureEnum) {
    PoiCategoryLeisureEnum["sauna"] = "Sauna";
})(PoiCategoryLeisureEnum || (PoiCategoryLeisureEnum = {}));


/***/ }),

/***/ "../../../../../src/app/poi/poi-category-leisure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryLeisure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poi_category_leisure_enum__ = __webpack_require__("../../../../../src/app/poi/poi-category-leisure-enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi_category__ = __webpack_require__("../../../../../src/app/poi/poi-category.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PoiCategoryLeisure = /** @class */ (function (_super) {
    __extends(PoiCategoryLeisure, _super);
    function PoiCategoryLeisure() {
        var _this = _super.call(this, 'leisure', 'Leisure') || this;
        _this.setEnum(__WEBPACK_IMPORTED_MODULE_0__poi_category_leisure_enum__["a" /* PoiCategoryLeisureEnum */]);
        return _this;
    }
    return PoiCategoryLeisure;
}(__WEBPACK_IMPORTED_MODULE_1__poi_category__["a" /* PoiCategory */]));



/***/ }),

/***/ "../../../../../src/app/poi/poi-category-tourism-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryTourismEnum; });
var PoiCategoryTourismEnum;
(function (PoiCategoryTourismEnum) {
    PoiCategoryTourismEnum["motel"] = "Motel";
    PoiCategoryTourismEnum["hostel"] = "Hostel";
    PoiCategoryTourismEnum["hotel"] = "Hotel";
})(PoiCategoryTourismEnum || (PoiCategoryTourismEnum = {}));


/***/ }),

/***/ "../../../../../src/app/poi/poi-category-tourism.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryTourism; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poi_category__ = __webpack_require__("../../../../../src/app/poi/poi-category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi_category_tourism_enum__ = __webpack_require__("../../../../../src/app/poi/poi-category-tourism-enum.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PoiCategoryTourism = /** @class */ (function (_super) {
    __extends(PoiCategoryTourism, _super);
    function PoiCategoryTourism() {
        var _this = _super.call(this, 'tourism', 'Tourism') || this;
        _this.setEnum(__WEBPACK_IMPORTED_MODULE_1__poi_category_tourism_enum__["a" /* PoiCategoryTourismEnum */]);
        return _this;
    }
    return PoiCategoryTourism;
}(__WEBPACK_IMPORTED_MODULE_0__poi_category__["a" /* PoiCategory */]));



/***/ }),

/***/ "../../../../../src/app/poi/poi-category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poitype__ = __webpack_require__("../../../../../src/app/poi/poitype.ts");

var PoiCategory = /** @class */ (function () {
    function PoiCategory(id, name) {
        this.typeList = new Array();
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(PoiCategory.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoiCategory.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    PoiCategory.prototype.setEnum = function (poiCategoryEnum) {
        this._enum = poiCategoryEnum;
        for (var item in this._enum) {
            if (this._enum.hasOwnProperty(item)) {
                console.log(item, this._enum, this._enum[item]);
                this.typeList.push(new __WEBPACK_IMPORTED_MODULE_0__poitype__["a" /* PoiType */](item, this, this._enum[item]));
            }
        }
    };
    return PoiCategory;
}());



/***/ }),

/***/ "../../../../../src/app/poi/poi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overpass_service__ = __webpack_require__("../../../../../src/app/overpass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi__ = __webpack_require__("../../../../../src/app/poi/poi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PoiService = /** @class */ (function () {
    function PoiService(_overpassService, snackBar) {
        this._overpassService = _overpassService;
        this.snackBar = snackBar;
        this._poiList$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"]([]);
        this.poiList$ = this._poiList$.asObservable();
    }
    PoiService.prototype.updatePoiList = function (poiType, startPoint, endPoint) {
        var _this = this;
        if (endPoint !== null &&
            startPoint !== null) {
            if (poiType !== null) {
                var leftBottomLongitude = void 0;
                var leftBottomLatitude = void 0;
                var rightTopLongitude = void 0;
                var rightTopLatitude = void 0;
                if (startPoint.latitude < endPoint.latitude) {
                    leftBottomLatitude = startPoint.latitude;
                    rightTopLatitude = endPoint.latitude;
                }
                else {
                    leftBottomLatitude = endPoint.latitude;
                    rightTopLatitude = startPoint.latitude;
                }
                if (startPoint.longitude < endPoint.longitude) {
                    leftBottomLongitude = startPoint.longitude;
                    rightTopLongitude = endPoint.longitude;
                }
                else {
                    leftBottomLongitude = endPoint.longitude;
                    rightTopLongitude = startPoint.longitude;
                }
                leftBottomLongitude -= 0.01;
                leftBottomLatitude -= 0.01;
                rightTopLongitude += 0.01;
                rightTopLatitude += 0.01;
                var pois = this._overpassService.getPOIs(poiType, leftBottomLongitude, leftBottomLatitude, rightTopLongitude, rightTopLatitude).subscribe(function (res) {
                    var poiList = res['elements'].reduce(function (list, element) {
                        if (element['tags'] !== undefined &&
                            element['tags']['name'] !== undefined) {
                            return list.concat([
                                new __WEBPACK_IMPORTED_MODULE_1__poi__["a" /* Poi */](poiType, element['id'], element['lat'], element['lon'], element['tags']['name'])
                            ]);
                        }
                        return list;
                    }, []);
                    _this._poiList$.next(poiList);
                    if (poiList.length === 0) {
                        _this.snackBar.open('There is no any available POI around the route or the POI service is down', 'close', {
                            duration: 5000,
                        });
                    }
                });
            }
            else {
                this._poiList$.next([]);
            }
        }
    };
    PoiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__overpass_service__["a" /* OverpassService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatSnackBar */]])
    ], PoiService);
    return PoiService;
}());



/***/ }),

/***/ "../../../../../src/app/poi/poi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__waypoint__ = __webpack_require__("../../../../../src/app/waypoint.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Poi = /** @class */ (function (_super) {
    __extends(Poi, _super);
    function Poi(type, id, latitude, longitude, name) {
        var _this = _super.call(this, latitude, longitude) || this;
        _this.type = type;
        _this.id = id;
        _this.latitude = latitude;
        _this.longitude = longitude;
        _this.name = name;
        return _this;
    }
    return Poi;
}(__WEBPACK_IMPORTED_MODULE_0__waypoint__["a" /* WayPoint */]));



/***/ }),

/***/ "../../../../../src/app/poi/poitype.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiType; });
var PoiType = /** @class */ (function () {
    function PoiType(id, category, title) {
        this.id = id;
        this.category = category;
        this.title = title;
    }
    return PoiType;
}());



/***/ }),

/***/ "../../../../../src/app/route/route.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\t<mat-sidenav #sidenav mode=\"side\" opened>\n\t\n\t\t<mat-card>\n  \t\t\t<mat-form-field>\n    \t\t\t<input matInput placeholder=\"Free time You have?\" type=\"number\" [formControl]=\"freeTimeField\">\n    \t\t\t<span matSuffix>&nbsp;minute</span>\n<!--     \t\t\t<mat-hint align=\"end\" style=\"{color: '#f44336'}\"> -->\n<!-- \t\t\t\t\t<span aria-live=\"polite\">The time is not enough for the trip!</span> -->\n<!-- \t\t\t\t\t<mat-icon>error</mat-icon> -->\n<!--             \t</mat-hint> -->\n  \t\t\t</mat-form-field>  \t\t\n  \t\t\t<div fxLayout=\"row\">\n  \t\t\t\t<mat-input-container fxFlex>\n\t\t\t\t\t<input matInput placeholder=\"Start coordinates\" readonly [value]=\"startPoint\">\n\t  \t\t\t</mat-input-container>\n  \t\t\t\t<mat-input-container fxFlex>\n\t\t\t\t\t<input matInput placeholder=\"End coordinates\" readonly [value]=\"endPoint\">\n\t  \t\t\t</mat-input-container>\n\t  \t\t</div>\n  \t\t\t<br>\n\n<!--   \t\t\t<mat-menu #rootMenu=\"matMenu\"> -->\n<!--   \t\t\t\t<ng-container *ngFor=\"let poiCategory of poiCategories\"> -->\n<!--   \t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"submenu\">{{poiCategory.name}}</button> -->\n<!--   \t\t\t\t\t<mat-menu #submenu=\"matMenu\"> -->\n<!-- \t\t\t\t\t\t<ng-container *ngFor=\"let poiType of poiCategory.getIds()\"> -->\n<!-- \t\t\t\t\t\t\t<button mat-menu-item (click)=\"poiTypeToCollect = poiType\">{{poiType.title}}</button> -->\n<!-- \t\t\t\t\t\t</ng-container> -->\n<!-- \t\t\t\t\t</mat-menu> -->\n<!--   \t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"amenitySubMenu\">{{poiCategories[0].name}}</button> -->\n<!--   \t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"tourismSubMenu\">{{poiCategories[1].name}}</button> -->\n<!--   \t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"leisureSubMenu\">{{poiCategories[2].name}}</button> -->\n<!-- \t\t\t\t</ng-container> -->\n<!-- \t\t\t</mat-menu> -->\n\n<!-- \t\t\t<mat-menu #amenity=\"matMenu\"> -->\n<!-- \t\t\t\t<ng-container *ngFor=\"let poiType of poiCategories[0].getIds()\"> -->\n<!-- \t\t\t\t\t<button mat-menu-item (click)=\"poiTypeToCollect = poiType\">{{poiType.title}}</button> -->\n<!-- \t\t\t\t</ng-container> -->\n<!-- \t\t\t</mat-menu> -->\n\t\t\t\n<!-- \t\t\t<mat-menu #tourism=\"matMenu\"> -->\n<!-- \t\t\t\t<ng-container *ngFor=\"let poiType of poiCategories[1].getIds()\"> -->\n<!-- \t\t\t\t\t<button mat-menu-item (click)=\"poiTypeToCollect = poiType\">{{poiType.title}}</button> -->\n<!-- \t\t\t\t</ng-container> -->\n<!-- \t\t\t</mat-menu> -->\n\t\t\t\n<!-- \t\t\t<mat-menu #leisure=\"matMenu\"> -->\n<!-- \t\t\t\t<ng-container *ngFor=\"let poiType of poiCategories[2].getIds()\"> -->\n<!-- \t\t\t\t\t<button mat-menu-item (click)=\"poiTypeToCollect = poiType\">{{poiType.title}}</button> -->\n<!-- \t\t\t\t</ng-container> -->\n<!-- \t\t\t</mat-menu> -->\n\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" >\n<!-- \t\t\t\t<mat-form-field fxFlex> -->\n<!-- \t\t\t\t  <mat-select placeholder=\"choose POI type\" [(ngModel)]=\"poiTypeToCollect\"> -->\n<!-- \t\t\t\t    <mat-option>-- None --</mat-option> -->\n<!-- \t\t\t\t    <ng-container *ngFor=\"let poiCategory of poiCategories\"> -->\n<!-- \t\t\t\t    \t<mat-optgroup [label]=\"poiCategory['name']\"> -->\n<!-- \t\t\t\t    \t\t<ng-container *ngFor=\"let poiType of poiCategory['ids']\"> -->\n<!-- \t\t\t\t    \t\t\t<mat-option [value]=\"poiType\">{{poiType['title']}}</mat-option> -->\n<!-- \t\t\t\t    \t\t</ng-container> -->\n<!-- \t\t\t\t    \t</mat-optgroup> -->\n<!-- \t\t\t\t    </ng-container> -->\n<!-- \t\t\t\t  </mat-select> -->\n<!-- \t\t\t\t</mat-form-field> -->\n\t\t\t\t<mat-form-field fxFlex>\n\t\t\t\t  <mat-select placeholder=\"choose POI type\" [(ngModel)]=\"poiTypeToCollect\">\n\t\t\t\t    <mat-option>-- None --</mat-option>\n\t\t\t\t    <ng-container *ngFor=\"let poiCategory of poiCategories\">\n\t\t\t\t    \t<mat-optgroup [label]=\"poiCategory.name\">\n\t\t\t\t    \t\t<ng-container *ngFor=\"let poiType of poiCategory.typeList\">\n\t\t\t\t    \t\t\t<mat-option [value]=\"poiType\">{{poiType.title}}</mat-option>\n\t\t\t\t    \t\t</ng-container>\n\t\t\t\t    \t</mat-optgroup>\n\t\t\t\t    </ng-container>\n\t\t\t\t  </mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<div fxFlex>\n\t\t\t\t\t<button mat-raised-button (click)=\"poiTypeToCollect = null\">clear POIs</button>\n\t\t\t\t</div>\n\t\t\t\t\t\n\n\t\t\t</div>\n\t\t\t\n\t\t\t<div *ngIf=\"routeLength > 0\">\n\t\t\t\tRoute length is <strong>{{routeLength}} meter</strong> and the duration is <strong>{{routeDuration}}</strong> long\n\t\t\t</div>\n\t\t</mat-card>\n\t\t\n\t\n\t</mat-sidenav>\n\t<app-map></app-map>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/route/route.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container {\n  height: 91vh;\n}\nmat-sidenav-container mat-sidenav {\n  min-width: 200px !important;\n  width: 85vw !important;\n  max-width: 400px !important;\n}\nmat-sidenav-container mat-sidenav input {\n  text-align: right;\n}\nmat-sidenav-container mat-sidenav input[type=number]::-webkit-outer-spin-button,\nmat-sidenav-container mat-sidenav input[type=number]::-webkit-inner-spin-button {\n  display: none;\n}\nmat-sidenav-container mat-sidenav mat-form-field.ng-invalid {\n  color: red;\n}\n/*\nmat-sidenav, \nmat-sidenav.mat-locked-open, \nmat-sidenav.mat-closed.mat-locked-open-add-active {\n    \n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/route/route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poi_poi_category_amenity__ = __webpack_require__("../../../../../src/app/poi/poi-category-amenity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi_poi_category_leisure__ = __webpack_require__("../../../../../src/app/poi/poi-category-leisure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poi_poi_category_tourism__ = __webpack_require__("../../../../../src/app/poi/poi-category-tourism.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poi_poi_service__ = __webpack_require__("../../../../../src/app/poi/poi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_service__ = __webpack_require__("../../../../../src/app/route/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RouteComponent = /** @class */ (function () {
    function RouteComponent(_routeService, _poiService) {
        this._routeService = _routeService;
        this._poiService = _poiService;
        this.freeTimeField = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]();
        this._startPoint = null;
        this._endPoint = null;
        this._intermediatePoints = new Array();
        this._routeLength = 0;
        this._routeDuration = 0;
        this._poiCategories = [new __WEBPACK_IMPORTED_MODULE_0__poi_poi_category_amenity__["a" /* PoiCategoryAmenity */](), new __WEBPACK_IMPORTED_MODULE_2__poi_poi_category_tourism__["a" /* PoiCategoryTourism */](), new __WEBPACK_IMPORTED_MODULE_1__poi_poi_category_leisure__["a" /* PoiCategoryLeisure */]()];
    }
    Object.defineProperty(RouteComponent.prototype, "poiTypeToCollect", {
        get: function () {
            return this._poiTypeToShow;
        },
        set: function (poiType) {
            if (poiType === undefined) {
                poiType = null;
            }
            this._routeService.setTypeToCollect(poiType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteComponent.prototype, "poiCategories", {
        get: function () { return this._poiCategories; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteComponent.prototype, "startPoint", {
        get: function () {
            if (this._startPoint === null) {
                return '';
            }
            return this._startPoint.longitude + ',' + this._startPoint.latitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteComponent.prototype, "endPoint", {
        get: function () {
            if (this._endPoint === null) {
                return '';
            }
            return this._endPoint.longitude + ',' + this._endPoint.latitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteComponent.prototype, "intermediatePoints", {
        get: function () {
            return this._intermediatePoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteComponent.prototype, "routeLength", {
        get: function () {
            return this._routeLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteComponent.prototype, "routeDuration", {
        get: function () {
            var minutes = Math.round(this._routeDuration % 60);
            var hours = Math.round((this._routeDuration - minutes) / 60);
            return (hours > 0 ? hours.toString() + ' hour' + (hours > 1 ? 's ' : ' ') : '') +
                (minutes > 0 ? minutes.toString() + ' minute' + (minutes > 1 ? 's' : '') : '');
        },
        enumerable: true,
        configurable: true
    });
    RouteComponent.prototype.checkEnoughTime = function (freeTime) {
        if (freeTime === null) {
            return;
        }
        if (freeTime < this._routeDuration) {
            this.freeTimeField.setErrors({ 'notenoughtime': true });
        }
    };
    RouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeService.routeLength$.subscribe(function (routeLength) {
            _this._routeLength = Math.round(routeLength);
            _this._routeDuration = routeLength / (_this._routeService.walkingSpeed * 60);
            _this.checkEnoughTime(_this.freeTimeField.value);
        });
        this._routeService.startPoint$.subscribe(function (startPoint) {
            _this._startPoint = startPoint;
        });
        this._routeService.endPoint$.subscribe(function (endPoint) {
            _this._endPoint = endPoint;
        });
        this._routeService.intermediatePoints$.subscribe(function (pois) {
            _this._intermediatePoints = pois;
        });
        this._routeService.typeToCollect$.subscribe(function (poiType) {
            _this._poiTypeToShow = poiType;
        });
        this.freeTimeField
            .valueChanges
            .debounceTime(400)
            .subscribe(function (freeTime) {
            _this.checkEnoughTime(freeTime);
        });
    };
    RouteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'app-route',
            template: __webpack_require__("../../../../../src/app/route/route.component.html"),
            styles: [__webpack_require__("../../../../../src/app/route/route.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__route_service__["a" /* RouteService */], __WEBPACK_IMPORTED_MODULE_3__poi_poi_service__["a" /* PoiService */]])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/route/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__osrm_service__ = __webpack_require__("../../../../../src/app/osrm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi_poi_service__ = __webpack_require__("../../../../../src/app/poi/poi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waypoint__ = __webpack_require__("../../../../../src/app/waypoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RouteService = /** @class */ (function () {
    function RouteService(_osrmService, _poiService) {
        var _this = this;
        this._osrmService = _osrmService;
        this._poiService = _poiService;
        this.walkingSpeed = 1.4; // in meter/second
        this._startPoint$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
        this.startPoint$ = this._startPoint$.asObservable();
        this._endPoint$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
        this.endPoint$ = this._endPoint$.asObservable();
        this._intermediatePoints$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"]([]);
        this.intermediatePoints$ = this._intermediatePoints$.asObservable();
        this._roundtrip$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](false);
        this.roundtrip$ = this._roundtrip$.asObservable();
        this._routeCoordinates$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"]([]);
        this.routeCoordinates$ = this._routeCoordinates$.asObservable();
        this._routeLength$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](0);
        this.routeLength$ = this._routeLength$.asObservable();
        this._typeToCollect$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
        this.typeToCollect$ = this._typeToCollect$.asObservable();
        this.startPoint$.subscribe(function (data) {
            _this.calculateRoute();
        });
        this.endPoint$.subscribe(function (data) {
            _this.calculateRoute();
        });
        this.intermediatePoints$.subscribe(function (data) {
            console.log('calculate');
            _this.calculateRoute();
        });
        this.roundtrip$.subscribe(function (data) {
            _this.calculateRoute();
        });
        this.typeToCollect$.subscribe(function (poiType) { return _this._poiService.updatePoiList(poiType, _this.startPoint, _this.endPoint); });
    }
    Object.defineProperty(RouteService.prototype, "startPoint", {
        get: function () {
            return this._startPoint$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "endPoint", {
        get: function () {
            return this._endPoint$.value;
        },
        enumerable: true,
        configurable: true
    });
    RouteService.prototype.setTypeToCollect = function (poiType) {
        this._typeToCollect$.next(poiType);
    };
    RouteService.prototype.addIntermediatePoint = function (newPoi) {
        if (this._intermediatePoints$.value.filter(function (poi) { return poi.id === newPoi.id; }).length === 0) {
            this._intermediatePoints$.next(this._intermediatePoints$.value.concat([newPoi]));
        }
    };
    RouteService.prototype.addStartPoint = function (wayPoint) {
        this._startPoint$.next(wayPoint);
    };
    RouteService.prototype.addEndPoint = function (wayPoint) {
        this._endPoint$.next(wayPoint);
    };
    RouteService.prototype.calculateRoute = function () {
        var _this = this;
        var wayPoints = [];
        if (this._startPoint$.value !== null) {
            wayPoints.push(this._startPoint$.value);
        }
        wayPoints = wayPoints.concat(this._intermediatePoints$.value);
        if (!this._roundtrip$.value && this._endPoint$.value !== null) {
            wayPoints.push(this._endPoint$.value);
        }
        this._poiService.updatePoiList(this._typeToCollect$.value, this.startPoint, this.endPoint);
        // minimally 2 point is mandatory for a route
        if (wayPoints.length < 2) {
            return;
        }
        this._osrmService.getRoute(wayPoints, this._roundtrip$.value).subscribe(function (data) {
            _this._routeLength$.next(data['trips'][0]['distance']);
            var latlngs = data['trips'][0].legs.reduce(function (legsArray, leg) {
                return legsArray.concat(leg.steps.reduce(function (stepsArray, step) {
                    return stepsArray.concat(step.geometry.coordinates.map(function (coordinate) { return new __WEBPACK_IMPORTED_MODULE_2__waypoint__["a" /* WayPoint */](coordinate[1], coordinate[0]); }));
                }, new Array()));
            }, new Array());
            _this._routeCoordinates$.next(latlngs);
        }, function (err) { return console.error(err); });
    };
    RouteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__osrm_service__["a" /* OsrmService */], __WEBPACK_IMPORTED_MODULE_1__poi_poi_service__["a" /* PoiService */]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "../../../../../src/app/sightseeing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightseeingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_route_component__ = __webpack_require__("../../../../../src/app/route/route.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // Add this
 // Add this
var routes = [{
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'route',
        component: __WEBPACK_IMPORTED_MODULE_3__route_route_component__["a" /* RouteComponent */]
    }];
var SightseeingRoutingModule = /** @class */ (function () {
    function SightseeingRoutingModule() {
    }
    SightseeingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], SightseeingRoutingModule);
    return SightseeingRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/sightseeing.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\t<mat-toolbar-row>\n    \t<h1>Sightseeing</h1>\n\n    \t<span class=\"example-spacer\"></span>\n    \n\t\t<button mat-button routerLink=\"home\">Home</button>\n\t\t<button mat-button routerLink=\"route\">Route</button>\n\t\t<button mat-button>Contact</button>\n\t</mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/sightseeing.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px;\n}\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sightseeing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightseeingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SightseeingComponent = /** @class */ (function () {
    function SightseeingComponent() {
        this.title = 'sightseeing';
    }
    SightseeingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/sightseeing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sightseeing.component.less")]
        })
    ], SightseeingComponent);
    return SightseeingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sightseeing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightseeingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2__ = __webpack_require__("../../../../@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sightseeing_routing_module__ = __webpack_require__("../../../../../src/app/sightseeing-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sightseeing_component__ = __webpack_require__("../../../../../src/app/sightseeing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__osrm_service__ = __webpack_require__("../../../../../src/app/osrm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__overpass_service__ = __webpack_require__("../../../../../src/app/overpass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__poi_poi_service__ = __webpack_require__("../../../../../src/app/poi/poi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__route_route_component__ = __webpack_require__("../../../../../src/app/route/route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__route_route_service__ = __webpack_require__("../../../../../src/app/route/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SightseeingModule = /** @class */ (function () {
    function SightseeingModule() {
    }
    SightseeingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__sightseeing_component__["a" /* SightseeingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_15__route_route_component__["a" /* RouteComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__sightseeing_routing_module__["a" /* SightseeingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2__["YagaModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__route_route_service__["a" /* RouteService */], __WEBPACK_IMPORTED_MODULE_12__osrm_service__["a" /* OsrmService */], __WEBPACK_IMPORTED_MODULE_14__poi_poi_service__["a" /* PoiService */], __WEBPACK_IMPORTED_MODULE_13__overpass_service__["a" /* OverpassService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__sightseeing_component__["a" /* SightseeingComponent */]]
        })
    ], SightseeingModule);
    return SightseeingModule;
}());



/***/ }),

/***/ "../../../../../src/app/waypoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WayPoint; });
var WayPoint = /** @class */ (function () {
    function WayPoint(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return WayPoint;
}());



/***/ }),

/***/ "../../../../../src/assets/marker-icon-green.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/marker-icon-red.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/marker-icon-yellow.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/assets/marker-icon.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/assets/marker-shadow.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_sightseeing_module__ = __webpack_require__("../../../../../src/app/sightseeing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_sightseeing_module__["a" /* SightseeingModule */]).then(function (ref) {
    var applicationRef = ref.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]);
    var appComponent = applicationRef.components[0];
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* enableDebugTools */])(appComponent);
    (function (appRef) { return Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* enableDebugTools */])(appRef); });
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map