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

module.exports = "<yaga-map [zoom]=\"11\" [lat]=latitude [lng]=longitude [minZoom]=\"1\"\n[maxZoom]=\"16\" (click)=\"handleEvent('click', $event);\">\n\t<yaga-zoom-control></yaga-zoom-control>\n\t<yaga-scale-control [metric]=\"true\" [imperial]=\"false\"></yaga-scale-control>\n\t<ng-container *ngFor=\"let wayPoint of intermediatePoints$ | async\">\n\t\t<yaga-marker [lat]=wayPoint.latitude [lng]=wayPoint.longitude>\n\t\t\t<yaga-icon [iconUrl]=markerIcon\n\t\t\t\t[iconSize]=\"[25, 41]\"\n\t\t\t\t[iconAnchor]=\"[13, 41]\"\n\t\t\t\t[shadowUrl]=markerIconShadow></yaga-icon>\n\t\t\t<yaga-popup>This is the content of the popup</yaga-popup>\n\t\t</yaga-marker>\n\t</ng-container>\n\t<yaga-polyline [latLngs]=latlngs></yaga-polyline>\n\t<yaga-tile-layer [url]=\"'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'\"></yaga-tile-layer>\n</yaga-map>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_route_service__ = __webpack_require__("../../../../../src/app/route/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__waypoint__ = __webpack_require__("../../../../../src/app/waypoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picktype__ = __webpack_require__("../../../../../src/app/map/picktype.ts");
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
    function MapComponent(cd, _osrmService, _routeService, _mapService) {
        this.cd = cd;
        this._osrmService = _osrmService;
        this._routeService = _routeService;
        this._mapService = _mapService;
        this.markerIcon = __webpack_require__("../../../../leaflet/dist/images/marker-icon.png");
        this.markerIconShadow = __webpack_require__("../../../../leaflet/dist/images/marker-shadow.png");
        this.pickCoordintePrecision = 6;
        this.latitude = 47.498333;
        this.longitude = 19.040833;
    }
    MapComponent.prototype.handleEvent = function (name, event) {
        if (event.latlng === undefined) {
            // somehow this event triggered twice and only the second is a real LeafletMouseEvent
            return;
        }
        switch (this.pickType) {
            case __WEBPACK_IMPORTED_MODULE_5__picktype__["a" /* PickType */].start:
                this._routeService.addStartPoint(new __WEBPACK_IMPORTED_MODULE_3__waypoint__["a" /* WayPoint */](Number((event.latlng.lat).toFixed(this.pickCoordintePrecision)), Number((event.latlng.lng).toFixed(this.pickCoordintePrecision))));
                break;
            case __WEBPACK_IMPORTED_MODULE_5__picktype__["a" /* PickType */].end:
                this._routeService.addEndPoint(new __WEBPACK_IMPORTED_MODULE_3__waypoint__["a" /* WayPoint */](Number((event.latlng.lat).toFixed(this.pickCoordintePrecision)), Number((event.latlng.lng).toFixed(this.pickCoordintePrecision))));
                break;
        }
        console.log(name, event, this.pickType);
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.intermediatePoints$ = this._routeService.intermediatePoints$;
        this._mapService.pickType$.subscribe(function (pickData) {
            _this.pickType = pickData;
        });
        this._routeService.routeCoordinates$.subscribe(function (routeData) {
            _this.latlngs = routeData.map(function (wayPoint) { return [wayPoint.latitude, wayPoint.longitude]; });
        });
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__osrm_service__["a" /* OsrmService */],
            __WEBPACK_IMPORTED_MODULE_2__route_route_service__["a" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_4__map_service__["a" /* MapService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picktype__ = __webpack_require__("../../../../../src/app/map/picktype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapService = /** @class */ (function () {
    function MapService() {
        this._pickType$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_0__picktype__["a" /* PickType */].none);
        this.pickType$ = this._pickType$.asObservable();
    }
    MapService.prototype.setPickType = function (pickType) {
        this._pickType$.next(pickType);
    };
    MapService.prototype.resetPickType = function () {
        this.setPickType(__WEBPACK_IMPORTED_MODULE_0__picktype__["a" /* PickType */].none);
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/app/map/picktype.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickType; });
var PickType;
(function (PickType) {
    PickType[PickType["none"] = 0] = "none";
    PickType[PickType["start"] = 1] = "start";
    PickType[PickType["end"] = 2] = "end";
})(PickType || (PickType = {}));


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
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatMenuModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatMenuModule */]
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
        this.url = 'http://overpass-api.de/api/interpreter/?data=[out:json];(node[{poi-group}=' +
            '{type}](bbox);way[{poi-group}={type}](bbox);rel[{poi-group}={type}](bbox));(._;%3E;);out%20center;' +
            '&bbox={left-top-longitude},{left-top-latitude},{right-bottom-longitude},{right-bottom-latitude}';
    }
    OverpassService.prototype.getPOIs = function (poiGroup, poiType, leftTopLongitude, leftTopLatitude, rightBottomLongitude, rightBottomLatitude) {
        var url = this.url
            .replace(/\{poi-group\}/gi, poiGroup.toString())
            .replace(/\{type\}/gi, poiType.toString())
            .replace(/\{left-top-longitude\}/gi, leftTopLongitude.toString())
            .replace(/\{left-top-latitude\}/gi, leftTopLatitude.toString())
            .replace(/\{right-bottom-longitude\}/gi, rightBottomLongitude.toString())
            .replace(/\{right-bottom-latitude\}/gi, rightBottomLatitude.toString());
        return this._http.get(url);
    };
    OverpassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OverpassService);
    return OverpassService;
}());



/***/ }),

/***/ "../../../../../src/app/poi-category-amenity-enum.ts":
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
    PoiCategoryAmenityEnum["casino"] = "Casion";
})(PoiCategoryAmenityEnum || (PoiCategoryAmenityEnum = {}));


/***/ }),

/***/ "../../../../../src/app/poi-category-amenity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryAmenity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poi_category_amenity_enum__ = __webpack_require__("../../../../../src/app/poi-category-amenity-enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi_category__ = __webpack_require__("../../../../../src/app/poi-category.ts");
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PoiCategoryAmenity.prototype, "name", {
        get: function () {
            return 'amenity';
        },
        enumerable: true,
        configurable: true
    });
    PoiCategoryAmenity.prototype.getEnum = function () {
        return __WEBPACK_IMPORTED_MODULE_0__poi_category_amenity_enum__["a" /* PoiCategoryAmenityEnum */];
    };
    return PoiCategoryAmenity;
}(__WEBPACK_IMPORTED_MODULE_1__poi_category__["a" /* PoiCategory */]));



/***/ }),

/***/ "../../../../../src/app/poi-category-leisure-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryLeisureEnum; });
var PoiCategoryLeisureEnum;
(function (PoiCategoryLeisureEnum) {
    PoiCategoryLeisureEnum["sauna"] = "Sauna";
})(PoiCategoryLeisureEnum || (PoiCategoryLeisureEnum = {}));


/***/ }),

/***/ "../../../../../src/app/poi-category-leisure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryLeisure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poi_category_leisure_enum__ = __webpack_require__("../../../../../src/app/poi-category-leisure-enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi_category__ = __webpack_require__("../../../../../src/app/poi-category.ts");
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PoiCategoryLeisure.prototype, "name", {
        get: function () {
            return 'leisure';
        },
        enumerable: true,
        configurable: true
    });
    PoiCategoryLeisure.prototype.getEnum = function () {
        return __WEBPACK_IMPORTED_MODULE_0__poi_category_leisure_enum__["a" /* PoiCategoryLeisureEnum */];
    };
    return PoiCategoryLeisure;
}(__WEBPACK_IMPORTED_MODULE_1__poi_category__["a" /* PoiCategory */]));



/***/ }),

/***/ "../../../../../src/app/poi-category-tourism-enum.ts":
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

/***/ "../../../../../src/app/poi-category-tourism.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategoryTourism; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poi_category__ = __webpack_require__("../../../../../src/app/poi-category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poi_category_tourism_enum__ = __webpack_require__("../../../../../src/app/poi-category-tourism-enum.ts");
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PoiCategoryTourism.prototype, "name", {
        get: function () {
            return 'tourism';
        },
        enumerable: true,
        configurable: true
    });
    PoiCategoryTourism.prototype.getEnum = function () {
        return __WEBPACK_IMPORTED_MODULE_1__poi_category_tourism_enum__["a" /* PoiCategoryTourismEnum */];
    };
    return PoiCategoryTourism;
}(__WEBPACK_IMPORTED_MODULE_0__poi_category__["a" /* PoiCategory */]));



/***/ }),

/***/ "../../../../../src/app/poi-category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__poitype__ = __webpack_require__("../../../../../src/app/poitype.ts");

var PoiCategory = /** @class */ (function () {
    function PoiCategory() {
    }
    PoiCategory.prototype.getIds = function () {
        var ids = [];
        for (var item in this.getEnum()) {
            if (this.getEnum().hasOwnProperty(item)) {
                ids.push(new __WEBPACK_IMPORTED_MODULE_0__poitype__["a" /* PoiType */](item, this.getEnum(), this.getEnum()[item]));
            }
        }
        return ids;
    };
    return PoiCategory;
}());



/***/ }),

/***/ "../../../../../src/app/poi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overpass_service__ = __webpack_require__("../../../../../src/app/overpass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_route_service__ = __webpack_require__("../../../../../src/app/route/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
    function PoiService(_overpassService, _routeService) {
        var _this = this;
        this._overpassService = _overpassService;
        this._routeService = _routeService;
        this._typeToCollect$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        this.typeToCollect$ = this._typeToCollect$.asObservable();
        this._poiList$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]([]);
        this.poiList$ = this._poiList$.asObservable();
        this.typeToCollect$.subscribe(function (poi) {
            if (_this._routeService.endPoint !== null &&
                _this._routeService.startPoint !== null &&
                _this._typeToCollect$.value !== null) {
                var poiType = _this._typeToCollect$.value;
                var leftTopLongitude = void 0;
                var leftTopLatitude = void 0;
                var rightBottomLongitude = void 0;
                var rightBottomLatitude = void 0;
                if (_this._routeService.startPoint.latitude < _this._routeService.endPoint.latitude) {
                    leftTopLatitude = _this._routeService.startPoint.latitude;
                    rightBottomLatitude = _this._routeService.endPoint.latitude;
                }
                else {
                    leftTopLatitude = _this._routeService.endPoint.latitude;
                    rightBottomLatitude = _this._routeService.startPoint.latitude;
                }
                if (_this._routeService.startPoint.longitude > _this._routeService.endPoint.longitude) {
                    leftTopLongitude = _this._routeService.startPoint.longitude;
                    rightBottomLongitude = _this._routeService.endPoint.longitude;
                }
                else {
                    leftTopLongitude = _this._routeService.endPoint.longitude;
                    rightBottomLongitude = _this._routeService.startPoint.longitude;
                }
                var pois = _this._overpassService.getPOIs(poiType.category, poiType.id, leftTopLongitude, leftTopLatitude, rightBottomLongitude, rightBottomLatitude).subscribe(function (res) {
                    console.log(res.json());
                    //this._poiList$.next(res.json());
                });
            }
        });
    }
    PoiService.prototype.setTypeToCollect = function (poiType) {
        this._typeToCollect$.next(poiType);
    };
    PoiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__overpass_service__["a" /* OverpassService */], __WEBPACK_IMPORTED_MODULE_1__route_route_service__["a" /* RouteService */]])
    ], PoiService);
    return PoiService;
}());



/***/ }),

/***/ "../../../../../src/app/poitype.ts":
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

module.exports = "<mat-sidenav-container>\n\t<mat-sidenav #sidenav mode=\"side\" opened>\n\t\n\t\t<mat-card>\n  \t\t\t<mat-form-field>\n    \t\t\t<input matInput placeholder=\"Free time You have?\" type=\"number\">\n    \t\t\t<span matSuffix>&nbsp;minute</span>\n  \t\t\t</mat-form-field>\n  \t\t\n  \t\t\t<div layout=\"row\">\n\t\t\t\t<mat-form-field flex>\n\t\t\t\t\t<input matInput placeholder=\"Start coordinates\" readonly [value]=\"startPoint\">\n\t  \t\t\t</mat-form-field>\n\t  \t\t\t<ng-container flex>\n\t  \t\t\t\t<mat-button-toggle value=\"left\" [disabled]=\"pickStartIsDisabled\" [checked]=\"pickStartButton\" (change)=\"pickStartChange($event)\">\n      \t\t\t\t\t<mat-icon>add_location</mat-icon>\n    \t\t\t\t</mat-button-toggle>\n\t  \t\t\t</ng-container>\n\t  \t\t</div>\n\t  \t\t<div layout=\"row\">\n\t\t\t\t<mat-form-field flex>\n\t\t\t\t\t<input matInput placeholder=\"End coordinates\" readonly [value]=\"endPoint\">\n\t  \t\t\t</mat-form-field>\n\t  \t\t\t<ng-container flex>\n\t  \t\t\t\t<mat-button-toggle value=\"left\" [disabled]=\"pickEndIsDisabled\" [checked]=\"pickEndButton\" (change)=\"pickEndChange($event)\">\n      \t\t\t\t\t<mat-icon>add_location</mat-icon>\n    \t\t\t\t</mat-button-toggle>\n\t  \t\t\t</ng-container>\n\t  \t\t</div>\n  \t\t\t<br>\n\n  \t\t\t<mat-menu #rootMenu=\"matMenu\">\n  \t\t\t\t<ng-container *ngFor=\"let poiCategory of poiCategories\">\n  \t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"submenu\">{{poiCategory.name}}</button>\n  \t\t\t\t\t<mat-menu #submenu=\"matMenu\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let poiType of poiCategory.getIds()\">\n\t\t\t\t\t\t\t<button mat-menu-item (click)=\"poiTypeToCollect = poiType\">{{poiType.title}}</button>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</mat-menu>\n<!--   \t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"amenitySubMenu\">{{poiCategories[0].name}}</button> -->\n<!--   \t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"tourismSubMenu\">{{poiCategories[1].name}}</button> -->\n<!--   \t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"leisureSubMenu\">{{poiCategories[2].name}}</button> -->\n\t\t\t\t</ng-container>\n\t\t\t</mat-menu>\n\n\t\t\t<mat-menu #amenity=\"matMenu\">\n\t\t\t\t<ng-container *ngFor=\"let poiType of poiCategories[0].getIds()\">\n\t\t\t\t\t<button mat-menu-item (click)=\"poiTypeToCollect = poiType\">{{poiType.title}}</button>\n\t\t\t\t</ng-container>\n\t\t\t</mat-menu>\n\t\t\t\n\t\t\t<mat-menu #tourism=\"matMenu\">\n\t\t\t\t<ng-container *ngFor=\"let poiType of poiCategories[1].getIds()\">\n\t\t\t\t\t<button mat-menu-item (click)=\"poiTypeToCollect = poiType\">{{poiType.title}}</button>\n\t\t\t\t</ng-container>\n\t\t\t</mat-menu>\n\t\t\t\n\t\t\t<mat-menu #leisure=\"matMenu\">\n\t\t\t\t<ng-container *ngFor=\"let poiType of poiCategories[2].getIds()\">\n\t\t\t\t\t<button mat-menu-item (click)=\"poiTypeToCollect = poiType\">{{poiType.title}}</button>\n\t\t\t\t</ng-container>\n\t\t\t</mat-menu>\n\n\t\t\t<div layout=\"row\">\n\t\t\t\t<ng-container flex>\n\t\t\t\t\t<button mat-raised-button [matMenuTriggerFor]=\"rootMenu\">Choose POIs</button>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container flex *ngIf=\"poiTypeToCollect !== null\">\n\t\t\t\t\t<button mat-button (click)=\"poiTypeToCollect = null\">{{poiTypeToCollect.title}}<mat-icon>clear</mat-icon></button>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</mat-card>\n\t\n\t</mat-sidenav>\n\t<app-map></app-map>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/route/route.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container {\n  height: 91vh;\n}\nmat-sidenav-container mat-sidenav {\n  min-width: 200px !important;\n  width: 85vw !important;\n  max-width: 400px !important;\n}\nmat-sidenav-container mat-sidenav input {\n  text-align: right;\n}\nmat-sidenav-container mat-sidenav input[type=number]::-webkit-outer-spin-button,\nmat-sidenav-container mat-sidenav input[type=number]::-webkit-inner-spin-button {\n  display: none;\n}\n/*\nmat-sidenav, \nmat-sidenav.mat-locked-open, \nmat-sidenav.mat-closed.mat-locked-open-add-active {\n    \n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/route/route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_picktype__ = __webpack_require__("../../../../../src/app/map/picktype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poi_category_amenity__ = __webpack_require__("../../../../../src/app/poi-category-amenity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poi_category_leisure__ = __webpack_require__("../../../../../src/app/poi-category-leisure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poi_category_tourism__ = __webpack_require__("../../../../../src/app/poi-category-tourism.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poi_service__ = __webpack_require__("../../../../../src/app/poi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__route_service__ = __webpack_require__("../../../../../src/app/route/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function RouteComponent(_mapService, _routeService, _poiService) {
        this._mapService = _mapService;
        this._routeService = _routeService;
        this._poiService = _poiService;
        this.pickStartIsDisabled = false;
        this.pickEndIsDisabled = false;
        this.pickStartButton = false;
        this.pickEndButton = false;
        this._startPoint = null;
        this._endPoint = null;
        this._poiCategories = [new __WEBPACK_IMPORTED_MODULE_2__poi_category_amenity__["a" /* PoiCategoryAmenity */](), new __WEBPACK_IMPORTED_MODULE_4__poi_category_tourism__["a" /* PoiCategoryTourism */](), new __WEBPACK_IMPORTED_MODULE_3__poi_category_leisure__["a" /* PoiCategoryLeisure */]()];
    }
    Object.defineProperty(RouteComponent.prototype, "poiTypeToCollect", {
        get: function () {
            return this._poiTypeToShow;
        },
        set: function (poiType) {
            this._poiService.setTypeToCollect(poiType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteComponent.prototype, "poiCategories", {
        get: function () {
            return this._poiCategories;
        },
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
    RouteComponent.prototype.pickStartChange = function (event) {
        this.pickStartButton = event.source.checked;
        this.pickEndButton = false;
        if (this.pickStartButton) {
            this._mapService.setPickType(__WEBPACK_IMPORTED_MODULE_1__map_picktype__["a" /* PickType */].start);
        }
        else {
            this._mapService.resetPickType();
        }
    };
    RouteComponent.prototype.pickEndChange = function (event) {
        this.pickEndButton = event.source.checked;
        this.pickStartButton = false;
        if (this.pickEndButton) {
            this._mapService.setPickType(__WEBPACK_IMPORTED_MODULE_1__map_picktype__["a" /* PickType */].end);
        }
        else {
            this._mapService.resetPickType();
        }
    };
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
    RouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeService.startPoint$.subscribe(function (startPoint) {
            _this._startPoint = startPoint;
        });
        this._routeService.endPoint$.subscribe(function (endPoint) {
            _this._endPoint = endPoint;
        });
        this._poiService.typeToCollect$.subscribe(function (poiType) {
            _this._poiTypeToShow = poiType;
        });
        //    this.populatePoiMenu();
    };
    RouteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'app-route',
            template: __webpack_require__("../../../../../src/app/route/route.component.html"),
            styles: [__webpack_require__("../../../../../src/app/route/route.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__map_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_6__route_service__["a" /* RouteService */], __WEBPACK_IMPORTED_MODULE_5__poi_service__["a" /* PoiService */]])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/route/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__osrm_service__ = __webpack_require__("../../../../../src/app/osrm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waypoint__ = __webpack_require__("../../../../../src/app/waypoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
    function RouteService(_osrmService) {
        var _this = this;
        this._osrmService = _osrmService;
        this._startPoint$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        this.startPoint$ = this._startPoint$.asObservable();
        this._endPoint$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        this.endPoint$ = this._endPoint$.asObservable();
        this._intermediatePoints$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]([]);
        this.intermediatePoints$ = this._intermediatePoints$.asObservable();
        this._roundtrip$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](false);
        this.roundtrip$ = this._roundtrip$.asObservable();
        this._routeCoordinates$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]([]);
        this.routeCoordinates$ = this._routeCoordinates$.asObservable();
        this.startPoint$.subscribe(function (data) {
            _this.calculateRoute();
        });
        this.endPoint$.subscribe(function (data) {
            _this.calculateRoute();
        });
        this.intermediatePoints$.subscribe(function (data) {
            _this.calculateRoute();
        });
        this.roundtrip$.subscribe(function (data) {
            _this.calculateRoute();
        });
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
    RouteService.prototype.addintermediatePoint = function (wayPoint) {
        this._intermediatePoints$.next(this._intermediatePoints$.value.concat([wayPoint]));
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
        wayPoints.concat(this._intermediatePoints$.value);
        if (!this._roundtrip$.value && this._endPoint$.value !== null) {
            wayPoints.push(this._endPoint$.value);
        }
        // minimally 2 point is mandatory for a route
        if (wayPoints.length < 2) {
            return;
        }
        this._osrmService.getRoute(wayPoints, this._roundtrip$.value).subscribe(function (data) {
            var latlngs = data['trips'][0].legs.reduce(function (legsArray, leg) {
                return legsArray.concat(leg.steps.reduce(function (stepsArray, step) {
                    return stepsArray.concat(step.geometry.coordinates.map(function (coordinate) { return new __WEBPACK_IMPORTED_MODULE_1__waypoint__["a" /* WayPoint */](coordinate[1], coordinate[0]); }));
                }, new Array()));
            }, new Array());
            _this._routeCoordinates$.next(latlngs);
        }, function (err) { return console.error(err); });
    };
    RouteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__osrm_service__["a" /* OsrmService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__map_map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__osrm_service__ = __webpack_require__("../../../../../src/app/osrm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__overpass_service__ = __webpack_require__("../../../../../src/app/overpass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__poi_service__ = __webpack_require__("../../../../../src/app/poi.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_9__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_15__route_route_component__["a" /* RouteComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__sightseeing_routing_module__["a" /* SightseeingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2__["YagaModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__map_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_16__route_route_service__["a" /* RouteService */], __WEBPACK_IMPORTED_MODULE_12__osrm_service__["a" /* OsrmService */], __WEBPACK_IMPORTED_MODULE_14__poi_service__["a" /* PoiService */], __WEBPACK_IMPORTED_MODULE_13__overpass_service__["a" /* OverpassService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_sightseeing_module__ = __webpack_require__("../../../../../src/app/sightseeing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_sightseeing_module__["a" /* SightseeingModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map