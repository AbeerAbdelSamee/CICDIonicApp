webpackJsonp([0],{

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcryptjs__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bcryptjs__);

var hash = function (string) {
    return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_0_bcryptjs__["hash"](string, "$2a$12$NbPH5lb6uWMaZhPWLPzFLu").then(function (hash) {
            resolve(hash);
        }, function (err) { return reject(err); });
    });
};
//# sourceMappingURL=bcrypt.provider.js.map

/***/ }),

/***/ 1096:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1098:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1130:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1131:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_loading__ = __webpack_require__(1200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_loading__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Loading = /** @class */ (function () {
    function Loading() {
    }
    Loading = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loading',template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/components/loading/loading.html"*/'<div class="loading">\n    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>\n    </svg>\n  </div>\n  \n'/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/components/loading/loading.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], Loading);
    return Loading;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoDataComponent; });
/* unused harmony export NoDataOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoDataComponent = /** @class */ (function () {
    function NoDataComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var defaults = {
            image: 'box',
            text: 'No Data to display!'
        };
        this.options = Object.assign(defaults, this.options);
    }
    NoDataComponent.prototype.onClick = function () {
        this.event.next();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", NoDataOptions)
    ], NoDataComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NoDataComponent.prototype, "button", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NoDataComponent.prototype, "event", void 0);
    NoDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'no-data',template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/components/no-data/no-data.html"*/'<div class="no-data">\n  <div [ngSwitch]="options.image">\n    <div *ngSwitchCase="\'cart\'">\n      <img src="./assets/empty-cart.png" alt="">\n    </div>\n    <div *ngSwitchCase="\'box\'">\n      <img src="./assets/empty-box.png" alt="">\n    </div>\n    <div *ngSwitchDefault>\n      <img src="./assets/empty-box.png" alt="">\n    </div>\n  </div>\n\n  <p>{{options?.text}}</p>\n  <ion-row *ngIf="button">\n    <ion-col text-center>\n      <button ion-button [color]="button.color" (click)="onClick()">{{button.text}}</button>\n    </ion-col>\n  </ion-row>\n  \n\n</div>\n'/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/components/no-data/no-data.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], NoDataComponent);
    return NoDataComponent;
}());

var NoDataOptions = /** @class */ (function () {
    function NoDataOptions() {
    }
    return NoDataOptions;
}());

//# sourceMappingURL=no-data.js.map

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 496,
	"./af.js": 496,
	"./ar": 497,
	"./ar-dz": 498,
	"./ar-dz.js": 498,
	"./ar-kw": 499,
	"./ar-kw.js": 499,
	"./ar-ly": 500,
	"./ar-ly.js": 500,
	"./ar-ma": 501,
	"./ar-ma.js": 501,
	"./ar-sa": 502,
	"./ar-sa.js": 502,
	"./ar-tn": 503,
	"./ar-tn.js": 503,
	"./ar.js": 497,
	"./az": 504,
	"./az.js": 504,
	"./be": 505,
	"./be.js": 505,
	"./bg": 506,
	"./bg.js": 506,
	"./bm": 507,
	"./bm.js": 507,
	"./bn": 508,
	"./bn.js": 508,
	"./bo": 509,
	"./bo.js": 509,
	"./br": 510,
	"./br.js": 510,
	"./bs": 511,
	"./bs.js": 511,
	"./ca": 512,
	"./ca.js": 512,
	"./cs": 513,
	"./cs.js": 513,
	"./cv": 514,
	"./cv.js": 514,
	"./cy": 515,
	"./cy.js": 515,
	"./da": 516,
	"./da.js": 516,
	"./de": 517,
	"./de-at": 518,
	"./de-at.js": 518,
	"./de-ch": 519,
	"./de-ch.js": 519,
	"./de.js": 517,
	"./dv": 520,
	"./dv.js": 520,
	"./el": 521,
	"./el.js": 521,
	"./en-au": 522,
	"./en-au.js": 522,
	"./en-ca": 523,
	"./en-ca.js": 523,
	"./en-gb": 524,
	"./en-gb.js": 524,
	"./en-ie": 525,
	"./en-ie.js": 525,
	"./en-il": 526,
	"./en-il.js": 526,
	"./en-nz": 527,
	"./en-nz.js": 527,
	"./eo": 528,
	"./eo.js": 528,
	"./es": 529,
	"./es-do": 530,
	"./es-do.js": 530,
	"./es-us": 531,
	"./es-us.js": 531,
	"./es.js": 529,
	"./et": 532,
	"./et.js": 532,
	"./eu": 533,
	"./eu.js": 533,
	"./fa": 534,
	"./fa.js": 534,
	"./fi": 535,
	"./fi.js": 535,
	"./fo": 536,
	"./fo.js": 536,
	"./fr": 537,
	"./fr-ca": 538,
	"./fr-ca.js": 538,
	"./fr-ch": 539,
	"./fr-ch.js": 539,
	"./fr.js": 537,
	"./fy": 540,
	"./fy.js": 540,
	"./gd": 541,
	"./gd.js": 541,
	"./gl": 542,
	"./gl.js": 542,
	"./gom-latn": 543,
	"./gom-latn.js": 543,
	"./gu": 544,
	"./gu.js": 544,
	"./he": 545,
	"./he.js": 545,
	"./hi": 546,
	"./hi.js": 546,
	"./hr": 547,
	"./hr.js": 547,
	"./hu": 548,
	"./hu.js": 548,
	"./hy-am": 549,
	"./hy-am.js": 549,
	"./id": 550,
	"./id.js": 550,
	"./is": 551,
	"./is.js": 551,
	"./it": 552,
	"./it.js": 552,
	"./ja": 553,
	"./ja.js": 553,
	"./jv": 554,
	"./jv.js": 554,
	"./ka": 555,
	"./ka.js": 555,
	"./kk": 556,
	"./kk.js": 556,
	"./km": 557,
	"./km.js": 557,
	"./kn": 558,
	"./kn.js": 558,
	"./ko": 559,
	"./ko.js": 559,
	"./ku": 560,
	"./ku.js": 560,
	"./ky": 561,
	"./ky.js": 561,
	"./lb": 562,
	"./lb.js": 562,
	"./lo": 563,
	"./lo.js": 563,
	"./lt": 564,
	"./lt.js": 564,
	"./lv": 565,
	"./lv.js": 565,
	"./me": 566,
	"./me.js": 566,
	"./mi": 567,
	"./mi.js": 567,
	"./mk": 568,
	"./mk.js": 568,
	"./ml": 569,
	"./ml.js": 569,
	"./mn": 570,
	"./mn.js": 570,
	"./mr": 571,
	"./mr.js": 571,
	"./ms": 572,
	"./ms-my": 573,
	"./ms-my.js": 573,
	"./ms.js": 572,
	"./mt": 574,
	"./mt.js": 574,
	"./my": 575,
	"./my.js": 575,
	"./nb": 576,
	"./nb.js": 576,
	"./ne": 577,
	"./ne.js": 577,
	"./nl": 578,
	"./nl-be": 579,
	"./nl-be.js": 579,
	"./nl.js": 578,
	"./nn": 580,
	"./nn.js": 580,
	"./pa-in": 581,
	"./pa-in.js": 581,
	"./pl": 582,
	"./pl.js": 582,
	"./pt": 583,
	"./pt-br": 584,
	"./pt-br.js": 584,
	"./pt.js": 583,
	"./ro": 585,
	"./ro.js": 585,
	"./ru": 586,
	"./ru.js": 586,
	"./sd": 587,
	"./sd.js": 587,
	"./se": 588,
	"./se.js": 588,
	"./si": 589,
	"./si.js": 589,
	"./sk": 590,
	"./sk.js": 590,
	"./sl": 591,
	"./sl.js": 591,
	"./sq": 592,
	"./sq.js": 592,
	"./sr": 593,
	"./sr-cyrl": 594,
	"./sr-cyrl.js": 594,
	"./sr.js": 593,
	"./ss": 595,
	"./ss.js": 595,
	"./sv": 596,
	"./sv.js": 596,
	"./sw": 597,
	"./sw.js": 597,
	"./ta": 598,
	"./ta.js": 598,
	"./te": 599,
	"./te.js": 599,
	"./tet": 600,
	"./tet.js": 600,
	"./tg": 601,
	"./tg.js": 601,
	"./th": 602,
	"./th.js": 602,
	"./tl-ph": 603,
	"./tl-ph.js": 603,
	"./tlh": 604,
	"./tlh.js": 604,
	"./tr": 605,
	"./tr.js": 605,
	"./tzl": 606,
	"./tzl.js": 606,
	"./tzm": 607,
	"./tzm-latn": 608,
	"./tzm-latn.js": 608,
	"./tzm.js": 607,
	"./ug-cn": 609,
	"./ug-cn.js": 609,
	"./uk": 610,
	"./uk.js": 610,
	"./ur": 611,
	"./ur.js": 611,
	"./uz": 612,
	"./uz-latn": 613,
	"./uz-latn.js": 613,
	"./uz.js": 612,
	"./vi": 614,
	"./vi.js": 614,
	"./x-pseudo": 615,
	"./x-pseudo.js": 615,
	"./yo": 616,
	"./yo.js": 616,
	"./zh-cn": 617,
	"./zh-cn.js": 617,
	"./zh-hk": 618,
	"./zh-hk.js": 618,
	"./zh-tw": 619,
	"./zh-tw.js": 619
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1202;

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__no_data_no_data__ = __webpack_require__(1201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__index__["a" /* Loading */],
                __WEBPACK_IMPORTED_MODULE_3__no_data_no_data__["a" /* NoDataComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__index__["a" /* Loading */],
                __WEBPACK_IMPORTED_MODULE_3__no_data_no_data__["a" /* NoDataComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_auth__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { ComplainsPage } from '../pages/complains/complains';
var MyApp = /** @class */ (function () {
    function MyApp(platform, auth$, storage, statusBar, ionic$, splashScreen, menuCtrl) {
        var _this = this;
        this.platform = platform;
        this.auth$ = auth$;
        this.storage = storage;
        this.statusBar = statusBar;
        this.ionic$ = ionic$;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.auth$.start_listening();
        __WEBPACK_IMPORTED_MODULE_6_firebase_app___default.a.auth().setPersistence(__WEBPACK_IMPORTED_MODULE_6_firebase_app___default.a.auth.Auth.Persistence.LOCAL);
        this.platform.ready().then(function () {
            _this.storage.ready().then(function () {
                _this.storage.get("currentUser").then(function (user) {
                    if (user && __WEBPACK_IMPORTED_MODULE_6_firebase_app___default.a.auth().currentUser) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages__["a" /* HomePage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages__["b" /* LoginPage */];
                    }
                });
            });
            _this.statusBar.styleLightContent();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString("#0774C6");
            _this.splashScreen.hide();
        });
        this.pages = [
            { title: 'بحث بالحاله', component: __WEBPACK_IMPORTED_MODULE_8__pages__["a" /* HomePage */] },
            { title: 'بحث بالمنطقة', component: __WEBPACK_IMPORTED_MODULE_8__pages__["c" /* OrdersPage */] },
            { title: 'رسائل المحلات', component: __WEBPACK_IMPORTED_MODULE_8__pages__["e" /* StoresPage */] },
            { title: 'بحث لوحة التحكم', component: __WEBPACK_IMPORTED_MODULE_8__pages__["d" /* ScanPage */] },
        ];
    }
    MyApp.prototype.openPage = function (page) {
        if (this.nav.getActive().component != page.component)
            this.nav.setRoot(page.component);
    };
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.auth$.user.subscribe(function (user) {
            if (user) {
                _this.user = user;
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages__["b" /* LoginPage */]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/app/app.html"*/'<ion-menu [content]="content" side="right" [swipeEnabled]="false">\n    <ion-content [hidden]="!user">\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{ p.title }}\n        </button>\n        <!-- <button menuClose ion-item (click)="logout()">\n          تسجيل الخروج\n        </button> -->\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n  '/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* IonicProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FIREBASE_CONFIG; });
/* unused harmony export GOOGLE_MAP_API_KEY */
// import { FirebaseAppConfig } from "angularfire2";
var APP_CONFIG = {
    iconMode: 'ios',
    menuType: 'reveal',
    tabsHideOnSubPages: true,
    tabsPlacement: 'bottom',
    dayShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    backButtonText: '',
    backButtonIcon: 'arrow-back-outline'
};
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBc8n7WDv7bTX0ExJw7yK3cVx5keYLjucI",
    authDomain: "flick-d9797.firebaseapp.com",
    databaseURL: "https://flick-d9797.firebaseio.com",
    projectId: "flick-d9797",
    storageBucket: "flick-d9797.appspot.com",
    messagingSenderId: "101366680613",
    appId: "1:101366680613:web:b57e5745547698809503cc"
};
var GOOGLE_MAP_API_KEY = 'AIzaSyCBEPGtBVChpQpQgJzsbpJNrZpQomn-Nec';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_auth__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_provider__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bcrypt_provider__ = __webpack_require__(1091);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as firebase from 'firebase';







var AuthProvider = /** @class */ (function () {
    function AuthProvider(storage, ionic$) {
        this.storage = storage;
        this.ionic$ = ionic$;
        this.user = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
    }
    AuthProvider.prototype.start_listening = function () {
        var _this = this;
        this.user.subscribe(function (user) {
            _this._user = user;
        });
        this.storage.ready().then(function () {
            _this.storage.get("currentUser").then(function (user) {
                if (user) {
                    var u = JSON.parse(user);
                    _this.user.next(u);
                }
            });
        });
    };
    AuthProvider.prototype.logIn = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_7__bcrypt_provider__["a" /* hash */])(password).then(function (password_hash) {
                __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().signInWithEmailAndPassword(email, password).then(function (res) {
                    __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.firestore().collection("admins").doc(res.uid).get().then(function (snapshot) {
                        if (snapshot.exists) {
                            var user = __assign({ id: snapshot.id }, snapshot.data());
                            _this.storage.clear();
                            _this.storage.set('currentUser', JSON.stringify(user));
                            _this.user.next(user);
                            resolve(user);
                        }
                        else {
                            reject("هذه البيانات غير صحيحه!");
                        }
                    });
                }, function (err) {
                    console.log(err);
                    reject(err);
                });
            });
        });
        // return new Promise((resolve, reject) => {
        //     firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
        //         firebase.firestore().collection("drivers").doc(res.uid).get().then(snapshot => {
        //             if(snapshot.exists){
        //                 let user: any = { id: snapshot.id, ...snapshot.data() } as UserModel;
        //                 user.type = "drivers";
        //                 this.storage.clear();
        //                 this.storage.set('currentUser', JSON.stringify(user));
        //                 this.user.next(user)
        //                 resolve(user)
        //             }else{
        //                 firebase.firestore().collection("stores").doc(res.uid).get().then(snap => {
        //                     if(snap.exists){
        //                         let user: any = { id: snap.id, ...snap.data() } as UserModel;
        //                         user.type = "stores";
        //                         this.storage.clear();
        //                         this.storage.set('currentUser', JSON.stringify(user));
        //                         this.user.next(user)
        //                         resolve(user)
        //                     }else{
        //                         reject("هذه البيانات غير صحيحه!")
        //                     }
        //                 }, (err) => {
        //                     console.log(err)
        //                     reject(err);
        //                 });
        //             }
        //         }, (err) => {
        //             console.log(err)
        //             reject(err);
        //         });
        //     }, (err) => {
        //         console.log(err)
        //         reject("هذه البيانات غير صحيحه!")
        //     })
        // })
    };
    AuthProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.firestore().collection("employees").doc(_this._user.id).get().then(function (user) {
                resolve(__assign({ uid: user.id }, user.data()));
            }, function (error) { return reject(error); });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.storage.clear();
        this.storage.remove('currentUser');
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_provider__["a" /* IonicProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.provider.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(493);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagingPage = /** @class */ (function () {
    function MessagingPage(navCtrl, actionSheetCtrl, chat$, auth$, ngZone, camera, navParams, ionic$, storage$) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.chat$ = chat$;
        this.auth$ = auth$;
        this.ngZone = ngZone;
        this.camera = camera;
        this.navParams = navParams;
        this.ionic$ = ionic$;
        this.storage$ = storage$;
        this.isLoading = false;
        this.no_data = false;
        this.end = null;
        this.all_orders = [];
        this.no_data_options = {
            text: "لا يوجد اى رسائل"
        };
        this.message = {
            image: "",
            text: ""
        };
        // messages list
        this.messages = [];
        this.isLoading = true;
        this.store = this.navParams.get("store");
        this.messages_listener = this.chat$.listen_messages(this.store.id).limit(20).onSnapshot(function (snapshot) {
            _this.ngZone.run(function () {
                if (!snapshot.empty) {
                    snapshot.docChanges.map(function (change, index) {
                        var message = __assign({ id: change.doc.id }, change.doc.data());
                        message.created_at = new Date(message.created_at);
                        var messageIdx = _this.messages.findIndex(function (ms) { return ms.id == message.id; });
                        if (change.type == "added") {
                            if (messageIdx === -1) {
                                _this.messages.push(message);
                            }
                            else {
                                _this.messages[messageIdx] = message;
                            }
                        }
                        else if (change.type == "removed") {
                            _this.messages.splice(messageIdx, 1);
                        }
                    });
                    _this.isLoading = false;
                }
                else {
                    _this.isLoading = false;
                }
            });
        });
    }
    MessagingPage.prototype.ngOnDestroy = function () {
        if (this.messages_listener)
            this.messages_listener();
    };
    MessagingPage.prototype.send = function () {
        var _this = this;
        if (!this.message.text) {
            this.ionic$.presentToast("قم بكتابة محتوى الرسالة");
            return;
        }
        this.isLoading = true;
        this.chat$.send_message({
            text: this.message.text
        }, this.store.id).then(function (doc) {
            _this.isLoading = false;
            _this.message.text = "";
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
            _this.ionic$.presentToast("لم نتمكن من اضافة الرسالة قم بالمحاولة مرة اخرى");
        });
    };
    MessagingPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'مكان الصوره',
            buttons: [
                {
                    text: 'اختيار من المعرض',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'استخدام كاميرا',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'غلق',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
        return false;
    };
    MessagingPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        this.camera.getPicture({
            quality: 30,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            if (imageData) {
                _this.isLoading = true;
                _this.storage$.put(_this.storage$.b64toBlob(imageData, "image/jpg")).then(function (downloadURL) {
                    _this.chat$.send_message({
                        image: downloadURL
                    }, _this.store.id).then(function (doc) {
                        _this.isLoading = false;
                    }, function (err) {
                        _this.isLoading = false;
                        console.log(err);
                        _this.ionic$.presentToast("لم نتمكن من اضافة الرسالة قم بالمحاولة مرة اخرى");
                    });
                }, function (err) {
                    _this.ionic$.presentToast("لم نتمكن من اضافة الرسالة قم بالمحاولة مرة اخرى");
                    _this.isLoading = false;
                });
            }
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };
    MessagingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-messaging',template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/pages/messaging/messaging.html"*/'\n<ion-header class="main-header pd-right">\n    <ion-navbar>\n        <ion-title>\n            {{ store.name }}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n    \n<ion-content padding>\n    <!-- commented by abeer -->\n    <loading *ngIf="isLoading"></loading>\n    <no-data [options]="no_data_options" *ngIf="!messages.length && !isLoading"></no-data>\n    <div class="messages">\n        <div class="message" *ngFor="let message of messages" [class.sender]="message.from == \'user\'">\n            <div class="text" *ngIf="message.text">{{ message.text }}</div>\n            <div class="image" *ngIf="message.image">\n                <img src="{{ message.image }}" alt="{{ message.text }}">\n            </div>\n            <div class="date">{{ message.created_at | amLocal | amLocale:\'ar\' | amDateFormat: \'DD/MM/YYYY hh:mm a\'  }}</div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class="send">\n        <input type="text" placeholder="اكتب الرسالة هنا..." [(ngModel)]="message.text" name="text">\n        <button type="button" class="send" (click)="send()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n        <button type="button" class="attach" (click)="presentActionSheet()">\n          <ion-icon name="images"></ion-icon>\n        </button>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/pages/messaging/messaging.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* ChatProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* IonicProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* StorageProvider */]])
    ], MessagingPage);
    return MessagingPage;
}());

//# sourceMappingURL=messaging.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IonicProvider = /** @class */ (function () {
    function IonicProvider(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    IonicProvider.prototype.presentToast = function (message, duration, position, close) {
        if (position === void 0) { position = "bottom"; }
        if (close === void 0) { close = false; }
        var durationTime = 0;
        if (duration === 'long') {
            durationTime = 5000;
        }
        else if (duration === 'short') {
            durationTime = 600;
        }
        else {
            durationTime = 3500;
        }
        var toast = this.toastCtrl.create({
            message: message,
            duration: durationTime,
            position: position,
            showCloseButton: close,
        });
        toast.present();
    };
    IonicProvider.prototype.showAlert = function (title, subTitle, buttons) {
        !buttons ? buttons = "OK" : null;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [buttons]
        });
        alert.present();
    };
    // formular extracted from http://www.movable-type.co.uk/scripts/latlong.html
    IonicProvider.prototype.calculateDistance = function (currentCoords, destinationCoords) {
        var R = 6371; // kilometres
        var φ1 = this.toRadians(currentCoords.lat);
        var φ2 = this.toRadians(destinationCoords.lat);
        var Δφ = this.toRadians((destinationCoords.lat - currentCoords.lat));
        var Δλ = this.toRadians((destinationCoords.lng - currentCoords.lng));
        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };
    IonicProvider.prototype.toRadians = function (angle) {
        return angle * (Math.PI / 180);
    };
    IonicProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], IonicProvider);
    return IonicProvider;
}());

//# sourceMappingURL=ionic.provider.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return pages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_module__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_module__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_orders_module__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_stores_module__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messaging_messaging_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan_module__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(682);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(637);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orders_orders__ = __webpack_require__(633);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__orders_orders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_stores__ = __webpack_require__(635);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__stores_stores__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messaging_messaging__ = __webpack_require__(202);
/* unused harmony reexport MessagingPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scan_scan__ = __webpack_require__(684);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__scan_scan__["a"]; });






var pages = [
    __WEBPACK_IMPORTED_MODULE_0__home_home_module__["HomePageModule"],
    __WEBPACK_IMPORTED_MODULE_1__login_login_module__["LoginPageModule"],
    __WEBPACK_IMPORTED_MODULE_2__orders_orders_module__["OrdersPageModule"],
    __WEBPACK_IMPORTED_MODULE_3__stores_stores_module__["StoresPageModule"],
    __WEBPACK_IMPORTED_MODULE_4__messaging_messaging_module__["MessagingPageModule"],
    __WEBPACK_IMPORTED_MODULE_5__scan_scan_module__["ScanPageModule"]
];






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 293:
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
webpackEmptyAsyncContext.id = 293;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		681
	],
	"../pages/login/login.module": [
		636
	],
	"../pages/messaging/messaging.module": [
		339
	],
	"../pages/orders/orders.module": [
		632
	],
	"../pages/scan/scan.module": [
		683
	],
	"../pages/stores/stores.module": [
		634
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 338;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPageModule", function() { return MessagingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messaging__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MessagingPageModule = /** @class */ (function () {
    function MessagingPageModule() {
    }
    MessagingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messaging__["a" /* MessagingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messaging__["a" /* MessagingPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], MessagingPageModule);
    return MessagingPageModule;
}());

//# sourceMappingURL=messaging.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md5_provider__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_provider__ = __webpack_require__(146);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderProvider = /** @class */ (function () {
    function OrderProvider(auth$) {
        this.auth$ = auth$;
    }
    OrderProvider.prototype.order = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("orders").doc(id);
    };
    OrderProvider.prototype.updateScannedOrder = function (order, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var update_data = {};
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("orders").doc(order.id).get().then(function (order_doc) {
                if (order_doc.exists) {
                    var odata = order_doc.data();
                    order_doc.ref.update({
                        scannedOrder: {
                            user: _this.auth$._user,
                            scanned_at: new Date()
                        },
                    });
                }
            });
            update_data.client_confirm_notes = data.notes;
            if (data.status == "scheduled" || data.status == "unresponsive") {
                update_data.client_confirmed = data.status;
                update_data.client_confirm_date = new Date();
            }
            if (data.status == "scheduled") {
                update_data.scheduled_date = data.scheduled_date.getTime();
            }
            update_data.updated_at = new Date().getTime();
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("orders").doc(order.id).update(update_data).then(function () {
                resolve(order);
            }, function (reason) {
                console.log("order error");
                reject(reason);
            });
        });
    };
    OrderProvider.prototype.update = function (order, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var update_data = {};
            if (data.status) {
                if (order.status != data.status) {
                    // if(data.status == "returned"){
                    //     update_data.returned = true;
                    //     if(order.status != "cancelled"){
                    //         update_data.status = "cancelled"
                    //     }
                    // }else{
                    update_data.status = data.status;
                    // }
                    if (status == "received")
                        update_data.confirmed = true;
                    if (data.status == "delivered") {
                        if (!data.delivery_date) {
                            update_data.delivery_date = new Date().getTime();
                        }
                    }
                    if (!order.driver && (data.status == "delivered" || data.status == "cancelled"))
                        update_data.driver = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("drivers").doc("yekivcDFhEQyWRlVmu17zOoJAFt2");
                    if (!order.collection) {
                        update_data.collection = Object(__WEBPACK_IMPORTED_MODULE_4__md5_provider__["a" /* md5 */])(order.id + Math.random().toString(36).substr(2, 9));
                        update_data.collection_timestamp = new Date().getTime();
                    }
                    if (data.status == "delivered") {
                        update_data.collect_amount = order.price + ((order.delivery_fees) ? order.delivery_fees : update_data.delivery_fees);
                        update_data.collect_notes = data.collect_notes;
                    }
                    if (data.status == "created" && order.status != "created") {
                        update_data.driver = null;
                    }
                }
                if (data.status == "delivered" || order.status == "delivered") {
                    if (data.delivery_date) {
                        update_data.delivery_date = data.delivery_date;
                    }
                }
            }
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("orders").doc(order.id).get().then(function (order_doc) {
                if (order_doc.exists) {
                    var odata = order_doc.data();
                    order_doc.ref.update({
                        scannedOrder: {
                            user: _this.auth$._user,
                            scanned_at: new Date()
                        },
                        status_history: (odata.status_history ? odata.status_history : []).concat([{
                                status: data.status,
                                notes: (data.notes) ? data.notes : "",
                                user: __assign({}, _this.auth$._user, { password: null }),
                                type: "scanner",
                                created_at: new Date()
                            }])
                    });
                }
            });
            update_data.client_confirm_notes = data.notes;
            if (data.status == "scheduled" || data.status == "unresponsive") {
                update_data.client_confirmed = data.status;
                update_data.client_confirm_date = new Date();
            }
            if (data.status == "scheduled") {
                update_data.scheduled_date = data.scheduled_date.getTime();
            }
            update_data.updated_at = new Date().getTime();
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("orders").doc(order.id).update(update_data).then(function () {
                resolve(order);
            }, function (reason) {
                console.log("order error");
                reject(reason);
            });
        });
    };
    OrderProvider.prototype.confirm_order = function (code) {
        return new Promise(function (resolve, reject) {
            code = code.toLowerCase();
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("orders").where("barcode", "==", code).get().then(function (snapshot) {
                if (!snapshot.empty) {
                    var dt = { confirmed: true, searching: false, confirm_date: new Date() };
                    if (snapshot.docs[0].data().status == 1)
                        dt.status = 2;
                    snapshot.docs[0].ref.update(dt).then(function () {
                        snapshot.docs[0].ref.collection("status").add({
                            source: 'flick',
                            status: 8,
                            created_at: new Date()
                        });
                        resolve();
                    }, function (err) { return reject(err); });
                }
                else {
                    reject();
                }
            });
        });
    };
    OrderProvider.prototype.get_settings = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("system").get().then(function (snapshot) {
                if (!snapshot.empty) {
                    var data_1 = {};
                    snapshot.docs.map(function (doc) {
                        data_1 = __assign({}, data_1, doc.data());
                    });
                    resolve(data_1);
                }
                else {
                    resolve();
                }
            });
        });
    };
    OrderProvider.prototype.update_pickup = function (id, status) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("pickups").doc(id).update({ updated_at: new Date(), status: status }).then(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    OrderProvider.prototype.get_pickups = function () {
        var day_start = new Date();
        day_start.setHours(0, 0, 0, 0);
        var day_end = new Date();
        day_end.setHours(24, 60, 60, 1000);
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection('pickups').where('status', '==', 0).where('pickup_date_timestamp', '>=', day_start.getTime()).where('pickup_date_timestamp', '<=', day_end.getTime()).orderBy('pickup_date_timestamp', 'desc');
    };
    OrderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__auth_provider__["a" /* AuthProvider */]])
    ], OrderProvider);
    return OrderProvider;
}());

//# sourceMappingURL=order.provider.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_provider__ = __webpack_require__(146);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatProvider = /** @class */ (function () {
    function ChatProvider(auth$) {
        this.auth$ = auth$;
    }
    ChatProvider.prototype.send_message = function (data, store_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app__["firestore"]().collection("chat").add(__assign({ user: __WEBPACK_IMPORTED_MODULE_1_firebase_app__["firestore"]().collection("stores").doc(store_id), sender: __WEBPACK_IMPORTED_MODULE_1_firebase_app__["firestore"]().collection("employees").doc(_this.auth$._user.id), from: "admin" }, data, { created_at: new Date().getTime() })).then(function (doc) {
                resolve(doc);
            }, function (err) { return reject(err); });
        });
    };
    ChatProvider.prototype.listen_messages = function (store_id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app__["firestore"]().collection("chat").where("user", "==", __WEBPACK_IMPORTED_MODULE_1_firebase_app__["firestore"]().collection("stores").doc(store_id)).orderBy('created_at');
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_provider__["a" /* AuthProvider */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.provider.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__(1179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var StorageProvider = /** @class */ (function () {
    function StorageProvider(firebaseApp) {
        this.storage = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.storage();
    }
    StorageProvider.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    StorageProvider.prototype.put = function (file, basePath) {
        var _this = this;
        if (basePath === void 0) { basePath = "chat_imgs"; }
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.storage().ref(basePath).child(_this.random_file_name() + ".jpg");
            storageRef.put(file, { contentType: 'image/jpg' }).then(function (snapshot) {
                resolve(snapshot.downloadURL);
            }, function (error) { return reject(error); });
        });
    };
    StorageProvider.prototype.removeFile = function (picture) {
        return new Promise(function (resolve, reject) {
            picture = picture.split('https://firebasestorage.googleapis.com/v0/b/services-6e871.appspot.com/o/images%2F').pop().split("?alt=media").shift();
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.storage().ref("images").child(picture);
            storageRef.delete();
        });
    };
    StorageProvider.prototype.random_file_name = function () {
        return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseApp */])),
        __metadata("design:paramtypes", [Object])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.provider.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(83);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, auth$, storage$, ionic$, call$, navParams, order$, barcode$) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth$ = auth$;
        this.storage$ = storage$;
        this.ionic$ = ionic$;
        this.call$ = call$;
        this.navParams = navParams;
        this.order$ = order$;
        this.barcode$ = barcode$;
        this.isLoading = true;
        this.orders = [];
        this.area = "";
        this.zones = [];
        this.areas_obj = {};
        this.order$.get_settings().then(function (settings) {
            for (var key in settings.zones) {
                _this.zones.push({
                    key: key,
                    value: settings.zones[key]
                });
                _this.areas_obj[key] = settings.zones[key];
            }
        });
    }
    OrdersPage.prototype.ngOnInit = function () { };
    OrdersPage.prototype.scanBarCode = function () {
        var _this = this;
        this.barcode$.scan().then(function (barcodeData) {
            if (barcodeData.text)
                _this.search(barcodeData.text);
        }).catch(function (err) {
            _this.ionic$.presentToast("Something Went Wrong", "long", "bottom");
            console.log('Error', err);
        });
    };
    OrdersPage.prototype.search = function (areaCode) {
        var _this = this;
        if (areaCode === void 0) { areaCode = null; }
        var orders_ref = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["firestore"]().collection("orders").limit(100);
        var several_codes = false;
        if (areaCode) {
            var codes = areaCode.split(' ');
            if (codes.length > 1) {
                several_codes = true;
                this.isLoading = true;
                this.orders = [];
                codes.map(function (code) {
                    if (_this.areas_obj[code]) {
                        var code_orders_ref = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["firestore"]().collection("orders").where('client_area', '==', code).limit(100);
                        _this.db_search(code_orders_ref.where("status", "==", "sorted"), false);
                        _this.db_search(code_orders_ref.where("status", "==", "scheduled"), false);
                        _this.db_search(code_orders_ref.where("status", "==", "unresponsive"), false);
                    }
                });
            }
            else {
                if (areaCode && this.areas_obj[areaCode]) {
                    orders_ref = orders_ref.where("client_area", "==", areaCode);
                }
                else if (this.area) {
                    orders_ref = orders_ref.where("client_area", "==", this.area);
                }
            }
        }
        else if (this.area) {
            orders_ref = orders_ref.where("client_area", "==", this.area);
        }
        if (!several_codes) {
            this.isLoading = true;
            this.db_search(orders_ref.where("status", "==", "sorted"));
            this.db_search(orders_ref.where("status", "==", "scheduled"), false);
            this.db_search(orders_ref.where("status", "==", "unresponsive"), false);
        }
    };
    OrdersPage.prototype.db_search = function (orders_ref, remove_orders) {
        var _this = this;
        if (remove_orders === void 0) { remove_orders = true; }
        orders_ref.get().then(function (snapshot) {
            if (!snapshot.empty) {
                if (remove_orders)
                    _this.orders = [];
                snapshot.docs.map(function (doc, index) {
                    var order = __assign({ id: doc.id }, doc.data());
                    var idx = _this.orders.findIndex(function (or) { return or.id == order.id; });
                    if (idx == -1) {
                        order.store.get().then(function (store) {
                            order.store = __assign({ id: store.id }, store.data());
                            _this.orders.push(order);
                            _this.isLoading = false;
                        }, function (err) {
                            _this.ionic$.presentToast("حدث خطأ فى هذه العمليه!");
                            _this.isLoading = false;
                        });
                    }
                    else {
                        order.store = _this.orders[idx].store;
                        _this.orders[idx] = order;
                        _this.isLoading = false;
                    }
                });
            }
            else {
                // this.ionic$.presentToast("لم يتم العثور على طلبات!");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.isLoading = false;
            _this.ionic$.presentToast("حدث خطأ فى هذه العمليه!");
        });
    };
    OrdersPage.prototype.ngOnDestroy = function () {
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders',template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/pages/orders/orders.html"*/'<ion-header class="sub-header">\n    <ion-navbar>\n        <ion-buttons>\n            <button ion-button icon-only menuToggle class="menuIco">\n                <span></span>\n                <span></span>\n                <span></span>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label>Area</ion-label>\n          <ion-select [(ngModel)]="area">\n            <ion-option value="">قم بإختيار منطقة</ion-option>\n            <ion-option *ngFor="let zone of zones" [value]="zone.key">{{ zone.value }}</ion-option>\n          </ion-select>\n        </ion-item>\n    </ion-list>\n    <button ion-button class="button-block" (click)="search()">Search</button>\n    <button ion-button class="button-block" (click)="scanBarCode()">Search by barcode</button>\n    <br>\n    <h5>Orders Found: {{ orders.length }}</h5>\n    <div class="orders_list" *ngIf="orders.length">\n        <div class="single-order-active" *ngFor="let order of orders, let i = index">\n            <p class="client">{{ order?.client_name }}</p>\n            <p class="addressClient">{{ order?.client_address+((order?.client_floor)?", دور "+order?.client_floor:"")+((order?.client_flat)?", شقة "+order?.client_flat:"")+((order?.client_landmark)?"  "+order?.client_landmark:"") }}</p>\n            <p class="addressClient">{{ order?.store?.name }}</p>\n            <p class="addressClient">الحالة: {{ order?.status }}</p>\n            <p class="addressClient" *ngIf="order?.client_confirm_notes">ملاحظات العملاء: {{ order?.client_confirm_notes }}</p>\n            <p class="addressClient" *ngIf="order?.notes">ملاحظات الطلب: {{ order?.notes }}</p>\n            <p class="addressClient" *ngIf="order?.client_confirm_date">تاريخ الملاحظه: {{ order?.client_confirm_date }}</p>\n            <p class="addressClient" *ngIf="order?.scheduled_date">تاريخ التأجيل: {{ order?.scheduled_date | amLocal | amLocale:\'ar\' | amDateFormat: \'DD/MM/YYYY hh:mm a\' }}</p>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* IonicProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresPageModule", function() { return StoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StoresPageModule = /** @class */ (function () {
    function StoresPageModule() {
    }
    StoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stores__["a" /* StoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stores__["a" /* StoresPage */]),
            ],
        })
    ], StoresPageModule);
    return StoresPageModule;
}());

//# sourceMappingURL=stores.module.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messaging_messaging__ = __webpack_require__(202);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoresPage = /** @class */ (function () {
    function StoresPage(navCtrl, navParams, auth$, order$, ionic$) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth$ = auth$;
        this.order$ = order$;
        this.ionic$ = ionic$;
        this.stores = [];
        this.isLoading = true;
        this.no_data = false;
        this.end = null;
        this.all_stores = [];
        this.hide_iscroll = false;
        this.no_data_options = {
            text: "لم نتمكن من العثور على طلبات!"
        };
        // status var
        this.status_select = "";
        this.get_stores();
    }
    StoresPage.prototype.get_stores = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (!infiniteScroll)
            this.isLoading = true;
        this.no_data = false;
        var stores_ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.firestore().collection("stores").limit(20).orderBy('created_at', 'desc');
        if (this.end)
            stores_ref = stores_ref.startAfter(this.end);
        stores_ref.get().then(function (snapshot) {
            if (snapshot.empty) {
                if (!_this.stores.length)
                    _this.no_data = true;
                _this.hide_iscroll = true;
            }
            snapshot.docs.forEach(function (doc, index) {
                var store = __assign({ id: doc.id }, doc.data());
                store.created_at = new Date(store.created_at);
                _this.stores.push(store);
                __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.firestore().collection("chat").where("user", "==", doc.ref).orderBy('created_at', 'desc').limit(1).get().then(function (messages_snap) {
                    if (!messages_snap.empty) {
                        var str_idx = _this.stores.findIndex(function (st) { return st.id == store.id; });
                        _this.stores[str_idx].latest_message = __assign({ id: messages_snap.docs[0].id }, messages_snap.docs[0].data());
                    }
                });
                if (index == snapshot.docs.length - 1) {
                    _this.stores.sort(function (a, b) {
                        return b.created_at - a.created_at;
                    });
                    _this.end = _this.stores[_this.stores.length - 1].created_at.getTime();
                    if (infiniteScroll) {
                        infiniteScroll.complete();
                    }
                    else {
                        _this.isLoading = false;
                    }
                }
            });
        }, function (err) {
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            else {
                _this.isLoading = false;
            }
            if (!_this.stores.length)
                _this.no_data = true;
            console.log(err);
        });
    };
    StoresPage.prototype.search = function () {
        var _this = this;
        if (this.search_keyword) {
            this.isLoading = true;
            __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.firestore().collection("stores").limit(8).orderBy("name").startAt(this.search_keyword).endAt(this.search_keyword + '\uf8ff').get().then(function (snapshot) {
                if (snapshot.empty) {
                    _this.ionic$.presentToast("لم نتمكن من العثور على المحل");
                    _this.no_data = true;
                    _this.isLoading = false;
                }
                else {
                    _this.stores = [];
                    snapshot.docs.forEach(function (doc, index) {
                        if (doc.exists) {
                            var store_1 = __assign({ id: doc.id }, doc.data());
                            store_1.created_at = new Date(store_1.created_at);
                            if (!_this.stores.find(function (or) { return or.id == store_1.id; }))
                                _this.stores.push(store_1);
                            if (_this.stores.length == snapshot.docs.length)
                                _this.isLoading = false;
                        }
                        else {
                            if (_this.stores.length == snapshot.docs.length)
                                _this.isLoading = false;
                        }
                    });
                }
            });
        }
        else {
            this.stores = [];
            this.get_stores();
        }
    };
    StoresPage.prototype.ngOnDestroy = function () { };
    StoresPage.prototype.openStore = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__messaging_messaging__["a" /* MessagingPage */], { store: this.stores[index] });
    };
    StoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stores',template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/pages/stores/stores.html"*/'<ion-header class="sub-header">\n    <ion-navbar>\n        <ion-title>\n            قائمة المحلات\n        </ion-title>\n        <ion-buttons>\n            <button ion-button icon-only menuToggle class="menuIco">\n                <span></span>\n                <span></span>\n                <span></span>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-searchbar class="search_input" placeholder="ابحث عن محل" [(ngModel)]="search_keyword" (ionInput)="search()" debounce="600"></ion-searchbar>\n    <!-- commented by abeer -->\n    <loading *ngIf="isLoading"></loading>\n\n    <no-data [options]="no_data_options" *ngIf="no_data"></no-data>\n    <div padding>\n        <div  class="single-order history" *ngFor="let store of stores, let index = index" (click)="openStore(index)">\n            <div class="info">\n                <h1>{{ store?.name }}</h1>\n                <div *ngIf="store?.latest_message">\n                    <p><span>{{ ((store?.latest_message?.from == \'user\')?"store: ":"you: ") }}</span>{{ (store?.latest_message.text)?(store?.latest_message.text):"An Attachment" }}</p><br>\n                    <p class="date"><i class="ic-clock-1315"></i>{{ store?.latest_message?.created_at | amLocal | amLocale:\'ar\' | amDateFormat: \'DD/MM/YYYY hh:mm a\' }}</p>\n                </div>\n            </div>\n            <i class="ic-wateen-42"></i>\n        </div>\n    </div>\n    <ion-infinite-scroll *ngIf="!hide_iscroll && !search_keyword" (ionInfinite)="get_stores($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/pages/stores/stores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* IonicProvider */]])
    ], StoresPage);
    return StoresPage;
}());

//# sourceMappingURL=stores.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(viewCtrl, modalCtrl, formBuilder, auth$, ionic$, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.auth$ = auth$;
        this.ionic$ = ionic$;
        this.navCtrl = navCtrl;
        this.isLoading = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.login_form = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomValidators"].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
        this.signIn(this.login_form);
    };
    LoginPage.prototype.signIn = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            console.log('here');
            // @TODO:://  permenant delete loading .
            // this.isLoading = true
            this.auth$.logIn(value).then(function (res) {
                console.log('1 : ', res);
                _this.isLoading = false;
                _this.auth$.start_listening();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["a" /* HomePage */]);
            }, function (error) {
                console.log('2 : ', error);
                if (error.code == "auth/wrong-password" || error.code == "auth/user-not-found") {
                    _this.ionic$.presentToast("البريد الالكترونى او كلمة السر غير صحيحه!");
                }
                else {
                    _this.ionic$.presentToast("هذه البيانات غير صحيحه!");
                }
                _this.isLoading = false;
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/pages/login/login.html"*/'<ion-content class="login-page" style="background-image: url(\'assets/imgs/login-bg.png\')">\n  <!-- commented by abeer -->\n  <loading *ngIf="isLoading"></loading>\n  <div class="bottom-login wintInputs">\n    <p class="formidable">\n      <span>ساهم فى</span>\n      <span>حل مشكلة</span>\n      <span>التوصيل</span>\n    </p>\n    <form [formGroup]="login_form">\n      <ion-item>\n        <ion-input type="email" formControlName="email" placeholder="البريد الالكتروني"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" formControlName="password" placeholder="كلمة المرور"></ion-input>\n      </ion-item>\n    </form>\n    <button ion-button block gradient-left (click)="signIn(login_form)" [disabled]="!login_form.valid">تسجيل دخول</button>\n    <!-- <button ion-button gradient-left box-shadow block (click)="facebookSignIn()">تسجيل الدخول باستخدام facebook</button> -->\n  </div>\n</ion-content>\n<!-- <ion-footer *ngIf="!isLoading">\n  <p text-center (click)="signup()">ليس لديك حساب؟ قم بالتسجيل الان</p>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* IonicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_provider__ = __webpack_require__(203);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_provider__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__order_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_provider__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_provider__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__chat_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_provider__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__storage_provider__["a"]; });










var providers = [
    __WEBPACK_IMPORTED_MODULE_0__ionic_provider__["a" /* IonicProvider */],
    __WEBPACK_IMPORTED_MODULE_1__order_provider__["a" /* OrderProvider */],
    __WEBPACK_IMPORTED_MODULE_2__auth_provider__["a" /* AuthProvider */],
    __WEBPACK_IMPORTED_MODULE_3__chat_provider__["a" /* ChatProvider */],
    __WEBPACK_IMPORTED_MODULE_4__storage_provider__["a" /* StorageProvider */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(83);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth$, storage$, ionic$, call$, navParams, order$, barcode$) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth$ = auth$;
        this.storage$ = storage$;
        this.ionic$ = ionic$;
        this.call$ = call$;
        this.navParams = navParams;
        this.order$ = order$;
        this.barcode$ = barcode$;
        this.isLoading = false;
        this.orders = [];
        this.status = "";
        this.notes = "";
        this.auth$.getUser().then(function (user) {
            _this.user = user;
        });
    }
    HomePage.prototype.ngOnInit = function () {
        // this.storage$.ready().then(() => {
        //   this.storage$.get("scanned_orders").then(orders => {
        //     if(orders){
        //       orders.map((order, index) => {
        //         this.order$.order(order.id).get().then((doc) => {
        //           if(doc.exists) {
        //             this.orders.push({ id: doc.id, ...doc.data(), store: order.store })
        //           }
        //           if(index == orders.length-1) this.update_orders();
        //         })
        //       })
        //     }
        //   });
        // });
    };
    HomePage.prototype.clearAll = function () {
        this.orders = [];
        this.update_orders();
    };
    HomePage.prototype.scanBarCode = function () {
        var _this = this;
        this.barcode$.scan().then(function (barcodeData) {
            _this.search_order(barcodeData.text);
        }).catch(function (err) {
            _this.ionic$.presentToast("Something Went Wrong", "long", "bottom");
            console.log('Error', err);
        });
    };
    // scanQrCode(){
    //   this.qrScanner.prepare()
    //   .then((status: QRScannerStatus) => {
    //     if (status.authorized) {
    //       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //         this.search_order(text, "qrcode")
    //         this.qrScanner.hide();
    //         scanSub.unsubscribe();
    //       });
    //     } else if (status.denied) {
    //       this.ionic$.presentToast("Please give permissions", "long", "bottom");
    //     } else {
    //       this.ionic$.presentToast("Please give permissions", "long", "bottom");
    //     }
    //   })
    //   .catch((e: any) => console.log('Error is', e));
    // }
    HomePage.prototype.addScannedOrder = function () {
        var _this = this;
        this.isLoading = true;
        var updated_orders = 0;
        this.orders.map(function (order, idx) {
            _this.order$.updateScannedOrder(order, {
                scannedOrder: {
                    user: _this.user,
                    scanned_at: new Date()
                },
            }).then(function () {
                updated_orders++;
                if (updated_orders == _this.orders.length) {
                    _this.isLoading = false;
                    _this.ionic$.presentToast("finished updating", "short", "bottom");
                }
            }, function (err) {
                updated_orders++;
                _this.ionic$.presentToast(order.client_name + " is not updated", "short", "bottom");
                if (updated_orders == _this.orders.length) {
                    _this.isLoading = false;
                    _this.ionic$.presentToast("finished updating", "short", "bottom");
                }
            });
        });
    };
    HomePage.prototype.applyAction = function () {
        var _this = this;
        if (!this.status && !this.notes) {
            this.ionic$.presentToast("Please choose a status", "long", "bottom");
            return;
        }
        if (this.status == "scheduled" && !this.scheduled_date) {
            this.ionic$.presentToast("قم باختيار تاريخ التأجيل", "long", "bottom");
            return;
        }
        // this.isLoading = true;
        var updated_orders = 0;
        this.orders.map(function (order, idx) {
            _this.order$.update(order, {
                status: _this.status,
                scheduled_date: (_this.scheduled_date) ? new Date(_this.scheduled_date) : null,
                notes: (_this.notes) ? _this.notes : ""
            }).then(function () {
                updated_orders++;
                if (updated_orders == _this.orders.length) {
                    _this.isLoading = false;
                    _this.ionic$.presentToast("finished updating", "short", "bottom");
                }
            }, function (err) {
                updated_orders++;
                _this.ionic$.presentToast(order.client_name + " is not updated", "short", "bottom");
                if (updated_orders == _this.orders.length) {
                    _this.isLoading = false;
                    _this.ionic$.presentToast("finished updating", "short", "bottom");
                }
            });
        });
    };
    HomePage.prototype.search_order = function (code, type) {
        var _this = this;
        if (type === void 0) { type = "barcode"; }
        var remove_orders = true;
        var orders_ref = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["firestore"]().collection("orders");
        code = code.trim();
        // code = code.toLowerCase();
        if (code == "c1") {
            orders_ref = orders_ref.where("status", "==", "cancelled");
        }
        else if (code == "s1") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 1);
            day_start.setHours(0, 0, 0, 0);
            var day_end = new Date();
            day_end.setDate(day_end.getDate() + 1);
            day_end.setHours(24, 60, 60, 1000);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).where('scheduled_date', '<=', day_end.getTime()).orderBy('scheduled_date', 'desc');
        }
        else if (code == "s2") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 2);
            day_start.setHours(0, 0, 0, 0);
            var day_end = new Date();
            day_end.setDate(day_end.getDate() + 2);
            day_end.setHours(24, 60, 60, 1000);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).where('scheduled_date', '<=', day_end.getTime()).orderBy('scheduled_date', 'desc');
        }
        else if (code == "s3") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 3);
            day_start.setHours(0, 0, 0, 0);
            var day_end = new Date();
            day_end.setDate(day_end.getDate() + 3);
            day_end.setHours(24, 60, 60, 1000);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).where('scheduled_date', '<=', day_end.getTime()).orderBy('scheduled_date', 'desc');
        }
        else if (code == "s4") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 4);
            day_start.setHours(0, 0, 0, 0);
            var day_end = new Date();
            day_end.setDate(day_end.getDate() + 4);
            day_end.setHours(24, 60, 60, 1000);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).where('scheduled_date', '<=', day_end.getTime()).orderBy('scheduled_date', 'desc');
        }
        else if (code == "s5") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 4);
            day_start.setHours(0, 0, 0, 0);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).orderBy('scheduled_date', 'desc');
        }
        else {
            remove_orders = false;
            orders_ref = orders_ref.where("barcode", "==", code);
        }
        // }else{
        //   orders_ref = orders_ref.where("store", "==", firebase.firestore().collection("stores").doc(code)).where("status", "==", "cancelled")
        // }
        orders_ref.get().then(function (snapshot) {
            if (!snapshot.empty) {
                if (remove_orders) {
                    _this.orders = [];
                    _this.update_orders();
                }
                snapshot.docs.map(function (doc, index) {
                    var order = __assign({ id: doc.id }, doc.data());
                    var idx = _this.orders.findIndex(function (or) { return or.id == order.id; });
                    if (idx == -1) {
                        order.store.get().then(function (store) {
                            order.store = __assign({ id: store.id }, store.data());
                            _this.orders.push(order);
                            _this.update_orders();
                            if (index == snapshot.docs.length)
                                _this.isLoading = false;
                        }, function (err) {
                            _this.ionic$.presentToast("حدث خطأ فى هذه العمليه!");
                            if (index == snapshot.docs.length)
                                _this.isLoading = false;
                        });
                    }
                    else {
                        order.store = _this.orders[idx].store;
                        _this.orders[idx] = order;
                        _this.update_orders();
                        if (index == snapshot.docs.length)
                            _this.isLoading = false;
                    }
                });
            }
            else {
                _this.ionic$.presentToast("لم يتم العثور على الطلب!");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.isLoading = false;
            _this.ionic$.presentToast("حدث خطأ فى هذه العمليه!");
        });
    };
    HomePage.prototype.update_orders = function () {
        // this.storage$.ready().then(() => {
        //   let orders;
        //   if(this.orders && this.orders.length){
        //     orders = this.orders.map((ord) => {
        //       return { id: ord.id, store: ord.store }
        //     })
        //   }else{
        //     orders = [];
        //   }
        //   this.storage$.set("scanned_orders", orders);
        // });
    };
    HomePage.prototype.remove_order = function (id) {
        var idx = this.orders.findIndex(function (or) { return or.id == id; });
        this.orders.splice(idx, 1);
        this.update_orders();
    };
    HomePage.prototype.call = function (phone_number) {
        this.call$.callNumber(phone_number, false);
    };
    HomePage.prototype.ngOnDestroy = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/pages/home/home.html"*/'<ion-header class="sub-header">\n    <ion-navbar>\n        <ion-buttons>\n            <button ion-button icon-only menuToggle class="menuIco">\n                <span></span>\n                <span></span>\n                <span></span>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <!-- commented by abeer -->\n    <loading *ngIf="isLoading"></loading>\n    <h5>Orders Scanned: {{ orders.length }}</h5>\n    <ion-list>\n        <ion-item>\n          <ion-label>Status</ion-label>\n          <ion-select [(ngModel)]="status">\n            <ion-option value="">قم بإختيار حاله</ion-option>\n            <ion-option value="created">قيد الانتظار</ion-option>\n            <ion-option value="ship_ready">جاهز للشحن</ion-option>\n            <ion-option value="picked">تم الاستلام</ion-option>\n            <ion-option value="received">فى المستودع</ion-option>\n            <ion-option value="sorted">تم الترتيب</ion-option>\n            <ion-option value="scheduled">مؤجل</ion-option>\n            <ion-option value="delivering">جارى التوصيل</ion-option>\n            <ion-option value="delivered">تم التوصيل</ion-option>\n            <ion-option value="cancelled">ملغى</ion-option>\n            <ion-option value="unresponsive">العميل لم يرد</ion-option>\n            <ion-option value="returned">تم الارجاع</ion-option>\n            <ion-option value="failed_deliver">شل التوصيل</ion-option>\n            <ion-option value="hold">علق</ion-option>\n            <ion-option value="in_transit">تم نقله</ion-option>\n            <ion-option value="refused_shipping">رفوض وتم دفع الشحن</ion-option>\n            <ion-option value="refused_no_fees">رفوض بدون دفع الشحن</ion-option>\n            <ion-option value="helioplis_warehouse">مستودع هليوبليس</ion-option>\n            <ion-option value="maadi_warehouse">مستودع المعادي</ion-option>\n            <ion-option value="giza_warehouse">مستودع الجيزة</ion-option>\n            <ion-option value="alex_warehouse">مستودع الاسكندرية</ion-option>\n            <ion-option value="delta_warehouse">مستودع الدلتا</ion-option>\n            <ion-option value="canal_warehouse">مستودع القناة</ion-option>\n            <ion-option value="upper_warehouse">مستودع الصعيد</ion-option>\n<!--             \n            <ion-option value="picked">تم الاستلام</ion-option>\n            <ion-option value="received">فى المستودع</ion-option>\n            <ion-option value="sorted">تم الترتيب</ion-option>\n            <ion-option value="scheduled">مؤجل</ion-option>\n            <ion-option value="delivering">جارى توصيله</ion-option>\n            <ion-option value="delivered">تم التوصيل</ion-option>\n            <ion-option value="cancelled">ملغى</ion-option>\n            <ion-option value="returned">تم الارجاع للمحل</ion-option>\n            <ion-option value="unresponsive">لم يتم الرد</ion-option>\n            <ion-option value="failed_deliver">فشل التوصيل</ion-option> -->\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="status == \'scheduled\'">\n            <ion-label>تاريخ التأجيل</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="scheduled_date"></ion-datetime>\n        </ion-item>\n    </ion-list>\n    <textarea name="notes" [(ngModel)]="notes" id="notes" placeholder="ملاحظات" cols="30" rows="5"></textarea>\n    <button ion-button class="button-block" (click)="scanBarCode()">Scan Bar Code To Confirm Orders</button>\n    <button ion-button class="button-block" *ngIf="orders.length" (click)="applyAction()">Apply Action</button>\n    <button ion-button class="button-block" *ngIf="orders.length" (click)="addScannedOrder()">Scan Orders</button>\n    <button ion-button class="button-block" *ngIf="orders.length" (click)="clearAll()">Clear All Orders</button>\n    <br>\n    <div class="orders_list" *ngIf="orders.length">\n        <div class="single-order-active" *ngFor="let order of orders, let i = index">\n            <p class="client">{{ order?.client_name }}</p>\n            <p class="addressClient">{{ order?.client_address+((order?.client_floor)?", دور "+order?.client_floor:"")+((order?.client_flat)?", شقة "+order?.client_flat:"")+((order?.client_landmark)?"  "+order?.client_landmark:"") }}</p>\n            <p class="addressClient">{{ order?.store?.name }}</p>\n            <p class="addressClient">{{ order?.status }}</p>\n            <button class="remove-btn" (click)="remove_order(order?.id)">\n                <ion-icon name="md-trash"></ion-icon>\n            </button>\n        </div>\n    </div>\n    <h2 class="not-found" *ngIf="!orders.length">No Orders Scanned Yet!</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* IonicProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ScanPageModule = /** @class */ (function () {
    function ScanPageModule() {
    }
    ScanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], ScanPageModule);
    return ScanPageModule;
}());

//# sourceMappingURL=scan.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(83);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
var ScanPage = /** @class */ (function () {
    function ScanPage(navCtrl, auth$, storage$, ionic$, call$, navParams, order$, barcode$) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth$ = auth$;
        this.storage$ = storage$;
        this.ionic$ = ionic$;
        this.call$ = call$;
        this.navParams = navParams;
        this.order$ = order$;
        this.barcode$ = barcode$;
        this.isLoading = false;
        this.orders = [];
        this.status = "";
        this.notes = "";
        this.current_barcode = "";
        this.auth$.getUser().then(function (user) {
            _this.user = user;
        });
    }
    ScanPage.prototype.ngOnInit = function () {
        // this.storage$.ready().then(() => {
        //   this.storage$.get("scanned_orders").then(orders => {
        //     if(orders){
        //       orders.map((order, index) => {
        //         this.order$.order(order.id).get().then((doc) => {
        //           if(doc.exists) {
        //             this.orders.push({ id: doc.id, ...doc.data(), store: order.store })
        //           }
        //           if(index == orders.length-1) this.update_orders();
        //         })
        //       })
        //     }
        //   });
        // });
    };
    ScanPage.prototype.clearAll = function () {
        this.orders = [];
        this.update_orders();
    };
    ScanPage.prototype.scanBarCode = function () {
        var _this = this;
        this.barcode$.scan().then(function (barcodeData) {
            _this.search_order(barcodeData.text);
        }).catch(function (err) {
            _this.ionic$.presentToast("Something Went Wrong", "long", "bottom");
            console.log('Error', err);
        });
    };
    ScanPage.prototype.scanDashboard = function () {
        var _this = this;
        this.barcode$.scan().then(function (barcodeData) {
            _this.current_barcode = barcodeData.text;
            _this.ionic$.presentToast("تم اضافة الكود قم بإضافة طلبات الان!", "short", "bottom");
        }).catch(function (err) {
            _this.ionic$.presentToast("Something Went Wrong", "long", "bottom");
            console.log('Error', err);
        });
    };
    // scanQrCode(){
    //   this.qrScanner.prepare()
    //   .then((status: QRScannerStatus) => {
    //     if (status.authorized) {
    //       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //         this.search_order(text, "qrcode")
    //         this.qrScanner.hide();
    //         scanSub.unsubscribe();
    //       });
    //     } else if (status.denied) {
    //       this.ionic$.presentToast("Please give permissions", "long", "bottom");
    //     } else {
    //       this.ionic$.presentToast("Please give permissions", "long", "bottom");
    //     }
    //   })
    //   .catch((e: any) => console.log('Error is', e));
    // }
    ScanPage.prototype.addScannedOrder = function () {
        var _this = this;
        this.isLoading = true;
        var updated_orders = 0;
        this.orders.map(function (order, idx) {
            _this.order$.updateScannedOrder(order, {
                scannedOrder: {
                    user: _this.user,
                    scanned_at: new Date()
                },
            }).then(function () {
                updated_orders++;
                if (updated_orders == _this.orders.length) {
                    _this.isLoading = false;
                    _this.ionic$.presentToast("finished updating", "short", "bottom");
                }
            }, function (err) {
                updated_orders++;
                _this.ionic$.presentToast(order.client_name + " is not updated", "short", "bottom");
                if (updated_orders == _this.orders.length) {
                    _this.isLoading = false;
                    _this.ionic$.presentToast("finished updating", "short", "bottom");
                }
            });
        });
    };
    ScanPage.prototype.applyAction = function () {
        var _this = this;
        if (!this.status && !this.notes) {
            this.ionic$.presentToast("Please choose a status", "long", "bottom");
            return;
        }
        if (this.status == "scheduled" && !this.scheduled_date) {
            this.ionic$.presentToast("قم باختيار تاريخ التأجيل", "long", "bottom");
            return;
        }
        this.isLoading = true;
        var updated_orders = 0;
        this.orders.map(function (order, idx) {
            _this.order$.update(order, {
                status: _this.status,
                scannedOrder: {
                    user: _this.user,
                    scanned_at: new Date()
                },
                scheduled_date: (_this.scheduled_date) ? new Date(_this.scheduled_date) : null,
                notes: (_this.notes) ? _this.notes : ""
            }).then(function () {
                updated_orders++;
                if (updated_orders == _this.orders.length) {
                    _this.isLoading = false;
                    _this.ionic$.presentToast("finished updating", "short", "bottom");
                }
            }, function (err) {
                updated_orders++;
                _this.ionic$.presentToast(order.client_name + " is not updated", "short", "bottom");
                if (updated_orders == _this.orders.length) {
                    _this.isLoading = false;
                    _this.ionic$.presentToast("finished updating", "short", "bottom");
                }
            });
        });
    };
    ScanPage.prototype.search_order = function (code, type) {
        var _this = this;
        if (type === void 0) { type = "barcode"; }
        var remove_orders = true;
        var orders_ref = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["firestore"]().collection("orders");
        code = code.trim();
        // code = code.toLowerCase();
        if (code == "c1") {
            orders_ref = orders_ref.where("status", "==", "cancelled");
        }
        else if (code == "s1") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 1);
            day_start.setHours(0, 0, 0, 0);
            var day_end = new Date();
            day_end.setDate(day_end.getDate() + 1);
            day_end.setHours(24, 60, 60, 1000);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).where('scheduled_date', '<=', day_end.getTime()).orderBy('scheduled_date', 'desc');
        }
        else if (code == "s2") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 2);
            day_start.setHours(0, 0, 0, 0);
            var day_end = new Date();
            day_end.setDate(day_end.getDate() + 2);
            day_end.setHours(24, 60, 60, 1000);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).where('scheduled_date', '<=', day_end.getTime()).orderBy('scheduled_date', 'desc');
        }
        else if (code == "s3") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 3);
            day_start.setHours(0, 0, 0, 0);
            var day_end = new Date();
            day_end.setDate(day_end.getDate() + 3);
            day_end.setHours(24, 60, 60, 1000);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).where('scheduled_date', '<=', day_end.getTime()).orderBy('scheduled_date', 'desc');
        }
        else if (code == "s4") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 4);
            day_start.setHours(0, 0, 0, 0);
            var day_end = new Date();
            day_end.setDate(day_end.getDate() + 4);
            day_end.setHours(24, 60, 60, 1000);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).where('scheduled_date', '<=', day_end.getTime()).orderBy('scheduled_date', 'desc');
        }
        else if (code == "s5") {
            var day_start = new Date();
            day_start.setDate(day_start.getDate() + 4);
            day_start.setHours(0, 0, 0, 0);
            orders_ref = orders_ref.where("status", "==", "scheduled").where('scheduled_date', '>=', day_start.getTime()).orderBy('scheduled_date', 'desc');
        }
        else {
            remove_orders = false;
            orders_ref = orders_ref.where("barcode", "==", code);
        }
        // }else{
        //   orders_ref = orders_ref.where("store", "==", firebase.firestore().collection("stores").doc(code)).where("status", "==", "cancelled")
        // }
        orders_ref.get().then(function (snapshot) {
            if (!snapshot.empty) {
                if (remove_orders) {
                    _this.orders = [];
                    _this.update_orders();
                }
                snapshot.docs.map(function (doc, index) {
                    var order = __assign({ id: doc.id }, doc.data());
                    if (_this.current_barcode) {
                        doc.ref.update({
                            scan_code: _this.current_barcode
                        });
                    }
                    var idx = _this.orders.findIndex(function (or) { return or.id == order.id; });
                    if (idx == -1) {
                        order.store.get().then(function (store) {
                            order.store = __assign({ id: store.id }, store.data());
                            _this.orders.push(order);
                            _this.update_orders();
                            if (index == snapshot.docs.length)
                                _this.isLoading = false;
                        }, function (err) {
                            _this.ionic$.presentToast("حدث خطأ فى هذه العمليه!");
                            if (index == snapshot.docs.length)
                                _this.isLoading = false;
                        });
                    }
                    else {
                        order.store = _this.orders[idx].store;
                        _this.orders[idx] = order;
                        _this.update_orders();
                        if (index == snapshot.docs.length)
                            _this.isLoading = false;
                    }
                });
            }
            else {
                _this.ionic$.presentToast("لم يتم العثور على الطلب!");
                _this.isLoading = false;
            }
        }, function (err) {
            _this.isLoading = false;
            _this.ionic$.presentToast("حدث خطأ فى هذه العمليه!");
        });
    };
    ScanPage.prototype.update_orders = function () {
        // this.storage$.ready().then(() => {
        //   let orders;
        //   if(this.orders && this.orders.length){
        //     orders = this.orders.map((ord) => {
        //       return { id: ord.id, store: ord.store }
        //     })
        //   }else{
        //     orders = [];
        //   }
        //   this.storage$.set("scanned_orders", orders);
        // });
    };
    ScanPage.prototype.remove_order = function (id) {
        var idx = this.orders.findIndex(function (or) { return or.id == id; });
        this.orders.splice(idx, 1);
        this.update_orders();
    };
    ScanPage.prototype.call = function (phone_number) {
        this.call$.callNumber(phone_number, false);
    };
    ScanPage.prototype.ngOnDestroy = function () {
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-scan',template:/*ion-inline-start:"/Users/abeer/Flick/scanner-app-main/src/pages/scan/scan.html"*/'<ion-header class="sub-header">\n    <ion-navbar>\n        <ion-buttons>\n            <button ion-button icon-only menuToggle class="menuIco">\n                <span></span>\n                <span></span>\n                <span></span>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <!-- commented by abeer -->\n    <loading *ngIf="isLoading"></loading>\n    <h5>Orders Scanned: {{ orders.length }}</h5>\n    <ion-list>\n        <ion-item>\n          <ion-label>Status</ion-label>\n          <ion-select [(ngModel)]="status">\n            <ion-option value="">قم بإختيار حاله</ion-option>\n            <!-- <ion-option value="created">قيد الانتظار</ion-option> -->\n            <!-- <ion-option value="ship_ready">جاهز للشحن</ion-option> -->\n            <ion-option value="picked">تم الاستلام</ion-option>\n            <ion-option value="received">فى المستودع</ion-option>\n            <ion-option value="sorted">تم الترتيب</ion-option>\n            <ion-option value="scheduled">مؤجل</ion-option>\n            <ion-option value="delivering">جارى توصيله</ion-option>\n            <ion-option value="delivered">تم التوصيل</ion-option>\n            <ion-option value="cancelled">ملغى</ion-option>\n            <ion-option value="returned">تم الارجاع للمحل</ion-option>\n            <ion-option value="unresponsive">لم يتم الرد</ion-option>\n            <ion-option value="failed_deliver">فشل التوصيل</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="status == \'scheduled\'">\n            <ion-label>تاريخ التأجيل</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="scheduled_date"></ion-datetime>\n        </ion-item>\n    </ion-list>\n    <textarea name="notes" [(ngModel)]="notes" id="notes" placeholder="ملاحظات" cols="30" rows="5"></textarea>\n    <button ion-button class="button-block" (click)="scanBarCode()">Scan Orders Barcode</button>\n    <button ion-button class="button-block" (click)="scanDashboard()">Scan Barcode from dashboard</button>\n    <button ion-button class="button-block" *ngIf="orders.length" (click)="applyAction()">Apply Action</button>\n    <button ion-button class="button-block" *ngIf="orders.length" (click)="addScannedOrder()">Scan Orders</button>\n    <button ion-button class="button-block" *ngIf="orders.length" (click)="clearAll()">Clear All Orders</button>\n    <br>\n    <div class="orders_list" *ngIf="orders.length">\n        <div class="single-order-active" *ngFor="let order of orders, let i = index">\n            <p class="client">{{ order?.client_name }}</p>\n            <p class="addressClient">{{ order?.client_address+((order?.client_floor)?", دور "+order?.client_floor:"")+((order?.client_flat)?", شقة "+order?.client_flat:"")+((order?.client_landmark)?"  "+order?.client_landmark:"") }}</p>\n            <p class="addressClient">{{ order?.store?.name }}</p>\n            <p class="addressClient">{{ order?.status }}</p>\n            <button class="remove-btn" (click)="remove_order(order?.id)">\n                <ion-icon name="md-trash"></ion-icon>\n            </button>\n        </div>\n    </div>\n    <h2 class="not-found" *ngIf="!orders.length">No Orders Scanned Yet!</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/abeer/Flick/scanner-app-main/src/pages/scan/scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* IonicProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(732);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(1310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(1311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__(1314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_validation__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_call_number__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { QRScanner } from '@ionic-native/qr-scanner';
__WEBPACK_IMPORTED_MODULE_16_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_11__config__["b" /* FIREBASE_CONFIG */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_11__config__["a" /* APP_CONFIG */], {
                    links: [
                        { loadChildren: '../pages/messaging/messaging.module#MessagingPageModule', name: 'MessagingPage', segment: 'messaging', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stores/stores.module#StoresPageModule', name: 'StoresPage', segment: 'stores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ].concat(__WEBPACK_IMPORTED_MODULE_4__pages__["f" /* pages */], [
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__config__["b" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["a" /* AngularFirestoreModule */]
            ]),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ].concat(__WEBPACK_IMPORTED_MODULE_8__providers__["f" /* providers */], [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_call_number__["a" /* CallNumber */]
                // QRScanner
            ])
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.provider.js.map

/***/ })

},[727]);
//# sourceMappingURL=main.js.map