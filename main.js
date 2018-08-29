(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#idSidePanel{\r\n    float: left;\r\n    width: 20%;\r\n    height: 1600px;\r\n    border-right: 1px solid silver;\r\n}\r\n#idMiddleContainer{\r\n  float:right;\r\n  width:80%;\r\n  height:1600px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-header></app-header>\n</div>\n<div>\n    <app-carousel></app-carousel>\n</div>\n<div>\n    <div id=\"idSidePanel\">\n          <app-side-panel></app-side-panel>\n    </div>\n    <div id=\"idMiddleContainer\">\n        <app-women></app-women>\n        <app-men></app-men>\n        <app-house></app-house>\n    </div>\n</div>\n<div>\n      <app-footer></app-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'product-demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _women_women_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./women/women.component */ "./src/app/women/women.component.ts");
/* harmony import */ var _men_men_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./men/men.component */ "./src/app/men/men.component.ts");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./house/house.component */ "./src/app/house/house.component.ts");
/* harmony import */ var _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./electronics/electronics.component */ "./src/app/electronics/electronics.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./side-panel/side-panel.component */ "./src/app/side-panel/side-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _women_women_component__WEBPACK_IMPORTED_MODULE_3__["WomenComponent"], _men_men_component__WEBPACK_IMPORTED_MODULE_4__["MenComponent"], _house_house_component__WEBPACK_IMPORTED_MODULE_5__["HouseComponent"], _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_6__["ElectronicsComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"], _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_10__["SidePanelComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel{\r\n  background: #2f4357;\r\n  margin-top: 20px;\r\n}\r\n.carousel .item{\r\n  min-height: 280px; /* Prevent carousel from being distorted if for some reason image doesn't load */\r\n}\r\n.carousel .item img{\r\n  margin: 0 auto; /* Align slide image horizontally center */\r\n}\r\n.classCarouselImg{\r\n  height: 280px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bs-example\" style=\"margin-top: 90px;\">\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Carousel indicators -->\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        </ol>\n        <!-- Wrapper for carousel items -->\n        <div class=\"carousel-inner\" style=\"min-height: 265px;\">\n            <div class=\"item active\">\n                <img src=\"./assets/womens_clothing/back1.jpg\" alt=\"First Slide\" style=\"height: 280px;\">\n            </div>\n            <div class=\"item\">\n                <img src=\"./assets/womens_clothing/back2.jpg\" alt=\"Second Slide\" style=\"height: 280px;\">\n            </div>\n            <div class=\"item\">\n                <img src=\"./assets/womens_clothing/back3.jpg\" alt=\"Third Slide\" style=\"height: 280px;\">\n            </div>\n        </div>\n        <!-- Carousel controls -->\n        <a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n        <a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/electronics/electronics.component.css":
/*!*******************************************************!*\
  !*** ./src/app/electronics/electronics.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/electronics/electronics.component.html":
/*!********************************************************!*\
  !*** ./src/app/electronics/electronics.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  electronics works!\n</p>\n"

/***/ }),

/***/ "./src/app/electronics/electronics.component.ts":
/*!******************************************************!*\
  !*** ./src/app/electronics/electronics.component.ts ***!
  \******************************************************/
/*! exports provided: ElectronicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronicsComponent", function() { return ElectronicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectronicsComponent = /** @class */ (function () {
    function ElectronicsComponent() {
    }
    ElectronicsComponent.prototype.ngOnInit = function () {
    };
    ElectronicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-electronics',
            template: __webpack_require__(/*! ./electronics.component.html */ "./src/app/electronics/electronics.component.html"),
            styles: [__webpack_require__(/*! ./electronics.component.css */ "./src/app/electronics/electronics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElectronicsComponent);
    return ElectronicsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a black background color to the top navigation */\r\n.classFooter {\r\n  background-color:#232F3E;\r\n  overflow: hidden;\r\n  height: 200px;\r\n  width: 100%;\r\n}\r\n.classImgSocialIcon{\r\n  width:35px;\r\n  margin-right:10px;\r\n}\r\n.classFooterHeading{\r\n  color: #878787;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n/* Style the links inside the navigation bar */\r\n.footer a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n/* Change the color of links on hover */\r\n.footer a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n/* Add a color to the active/current link */\r\n.footer a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"classFooter\">\n    <div style=\"padding: 15px; border-right: 1px solid #454d5e;width:30%;float:left;margin: 15px;\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.740823225136!2d73.88037349999999!3d18.534757300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b3d9df5b43f5c34!2sJava+classes%2C+Angularjs%2C+MeanStack%2C+Andriod+Training+in+Pune!5e0!3m2!1sen!2sin!4v1535021172122\" width=\"300\" height=\"150\" frameborder=\"0\" style=\"border:1px solid silver;\" allowfullscreen></iframe>\n    </div>\n    <div style=\"padding: 15px;width:30%;float: left;border-right: 1px solid #454d5e;margin: 15px;\">\n        <div>\n           <span class=\"classFooterHeading\" style=\"\">Mail us:</span>\n        </div>\n        <p>&nbsp;</p>\n        <div style=\"color:#fff;line-height: 0.7;\">\n            <p>Halsey Pvt Ltd Block B (Begonia), </p>\n            <p> Ground Floor, Embassy Tech Village, </p>\n            <p> Outer Ring Road, Devarabeesanahalli Village, </p>\n            <p> Varthur Hobli, Bengaluru East Taluk, </p>\n            <p> Bengaluru District, </p>\n            <p> Karnataka, India, 560103.</p>\n        </div>\n    </div>\n    <div style=\"padding: 15px;width:30%;float: left;margin: 15px;\">\n        <div>\n            <span style=\"color: #878787;font-size: 15px;font-weight: bold;\">Contact us:</span>\n        </div>\n        <div style=\"margin-top: 20px;\">\n            <img src=\"./assets/social_icons/facebook.png\" class=\"classImgSocialIcon\">\n            <img src=\"./assets/social_icons/instagram.png\" class=\"classImgSocialIcon\">\n            <img src=\"./assets/social_icons/linkedin.png\" class=\"classImgSocialIcon\">\n            <img src=\"./assets/social_icons/pinterest.png\" class=\"classImgSocialIcon\">\n            <img src=\"./assets/social_icons/twitter.png\" class=\"classImgSocialIcon\">\n        </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.classHeaderSignin{\r\n  color: #fff;\r\n  margin-right: 3%;\r\n}\r\n\r\n.classSearch{\r\n  margin-left: 30%;\r\n  margin-top: 30px;\r\n}\r\n\r\n/* Add a black background color to the top navigation */\r\n\r\n.topnav {\r\n  background-color: #232F3E;\r\n  overflow: hidden;\r\n  height: 90px;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 10;\r\n  top: 0;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.topnav a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n/* Change the color of links on hover */\r\n\r\n.topnav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\n.topnav a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"topnav\">\n      <div class=\"row\">\n        <div class=\"pull-left\" style=\"margin-left: 1%;\">\n          <img src=\"./assets/logo.png\" style=\"width: 100px;\">\n        </div>\n\n        <div class=\"classSearch\">\n            <form class=\"form-inline \">\n                <input class=\"form-control form-control-sm mr-3 w-75\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" style=\"width:50%;\">\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            </form>\n        </div>\n\n\n        <div class=\"pull-right classHeaderSignin\">\n          <span>Sign in</span>\n          &nbsp;\n          <span>Sign up</span>\n        </div>\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/house/house.component.css":
/*!*******************************************!*\
  !*** ./src/app/house/house.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/house/house.component.html":
/*!********************************************!*\
  !*** ./src/app/house/house.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"classInnerContainer\">\n  <ul>\n    <li *ngFor = \"let item of houseDecor\">\n      <div class=\"col-md-3 classCard1\" *ngFor = \"let painting of item.paintings\" style=\"width: 23%;height:370px;margin-bottom: 10px;\">\n            <div class=\"classImage\">\n                <img [src]='painting.imgUrl' alt=\"Avatar\" [ngStyle]=\"{'width':'205px','height':'185px'}\">\n            </div>\n            <div class=\"classContainer\">\n              <div><a href= '#'>{{painting.product_name}}</a></div>\n              <div class=\"classPrice\">{{painting.price | currency:'INR'}}</div>\n              <div class=\"classRetailPrice\">{{painting.retail_price | currency:'INR'}}</div>\n            </div>\n      </div>\n      &nbsp;\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/house/house.component.ts":
/*!******************************************!*\
  !*** ./src/app/house/house.component.ts ***!
  \******************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HouseComponent = /** @class */ (function () {
    function HouseComponent() {
        this.houseDecor = [{
                paintings: [
                    { 'product_name': 'SAF Ganesh Modern art Ink Painting',
                        'price': 399,
                        'retail_price': 1799,
                        'imgUrl': './assets/house_decor/paintings/img1.jpeg'
                    },
                    { 'product_name': 'SAF MODERN ARTISTIC SPARKLE ',
                        'price': 569,
                        'retail_price': 1399,
                        'imgUrl': './assets/house_decor/paintings/img2.jpeg'
                    },
                    { 'product_name': 'SAF RADHEY KRISHNA LARGE 5PANEL Ink Painting',
                        'price': 999,
                        'retail_price': 4500,
                        'imgUrl': './assets/house_decor/paintings/img3.jpeg'
                    },
                    { 'product_name': 'Janki Unique Beautiful wall picture Canvas Painting',
                        'price': 270,
                        'retail_price': 699,
                        'imgUrl': './assets/house_decor/paintings/img4.jpeg'
                    }
                ]
            }];
    }
    HouseComponent.prototype.ngOnInit = function () {
    };
    HouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house',
            template: __webpack_require__(/*! ./house.component.html */ "./src/app/house/house.component.html"),
            styles: [__webpack_require__(/*! ./house.component.css */ "./src/app/house/house.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HouseComponent);
    return HouseComponent;
}());



/***/ }),

/***/ "./src/app/men/men.component.css":
/*!***************************************!*\
  !*** ./src/app/men/men.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/men/men.component.html":
/*!****************************************!*\
  !*** ./src/app/men/men.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"classInnerContainer\">\r\n  <ul>\r\n    <li *ngFor = \"let cloth of mClothing\">\r\n      <div class=\"col-md-3 classCard1\" *ngFor = \"let fWear of cloth.western_wear\" style=\"width: 23%;height:370px;margin-bottom: 10px;\">\r\n            <div class=\"classImage\">\r\n                <img [src]='fWear.imgUrl' alt=\"Avatar\" [ngStyle]=\"{'width':'130px','height':'230px'}\">\r\n            </div>\r\n            <div class=\"classContainer\">\r\n              <div><a href= '#'>{{fWear.product_name}}</a></div>\r\n              <div class=\"classPrice\">{{fWear.price | currency:'INR'}}</div>\r\n              <div class=\"classRetailPrice\">{{fWear.retail_price | currency:'INR'}}</div>\r\n            </div>\r\n      </div>\r\n      &nbsp;\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/men/men.component.ts":
/*!**************************************!*\
  !*** ./src/app/men/men.component.ts ***!
  \**************************************/
/*! exports provided: MenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenComponent", function() { return MenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenComponent = /** @class */ (function () {
    function MenComponent() {
        this.mClothing = [{
                western_wear: [
                    { 'product_name': 'Tripr Solid Men V-neck Multicolor T-Shirt',
                        'price': 307,
                        'retail_price': 899,
                        'imgUrl': './assets/mens_clothing/western/img1.jpeg'
                    },
                    { 'product_name': 'Tripr Printed Men V-neck Black T-Shirtp',
                        'price': 341,
                        'retail_price': 899,
                        'imgUrl': './assets/mens_clothing/western/img2.jpeg'
                    },
                    { 'product_name': 'Bullseye Full Sleeve Solid Jacket',
                        'price': 599,
                        'retail_price': 4499,
                        'imgUrl': './assets/mens_clothing/western/img3.jpeg'
                    },
                    { 'product_name': 'Tinted Full Sleeve Solid Jacket',
                        'price': 767,
                        'retail_price': 1395,
                        'imgUrl': './assets/mens_clothing/western/img4.jpeg'
                    }
                ]
            }];
    }
    MenComponent.prototype.ngOnInit = function () {
    };
    MenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-men',
            template: __webpack_require__(/*! ./men.component.html */ "./src/app/men/men.component.html"),
            styles: [__webpack_require__(/*! ./men.component.css */ "./src/app/men/men.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenComponent);
    return MenComponent;
}());



/***/ }),

/***/ "./src/app/side-panel/side-panel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/side-panel/side-panel.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n/*\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #fff;\r\n  overflow-x: hidden;\r\n  margin-top: 370px;\r\n  border-right: 1px solid silver; */\r\n}\r\n\r\n.sidenav a {\r\n  padding: 6px 6px 6px 32px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: #818181;\r\n  display: block;\r\n  margin-top: 40px;\r\n}\r\n\r\n.sidenav a:hover {\r\n  color: #CF7531;\r\n}\r\n\r\n.main {\r\n  margin-left: 200px; /* Same as the width of the sidenav */\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n.sidenav {padding-top: 15px;}\r\n.sidenav a {font-size: 18px;}\r\n}\r\n"

/***/ }),

/***/ "./src/app/side-panel/side-panel.component.html":
/*!******************************************************!*\
  !*** ./src/app/side-panel/side-panel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n    <ul>\n      <li><a href=\"#\">Men</a></li>\n      <li><a href=\"#\">Women</a></li>\n      <li><a href=\"#\">Electronics</a></li>\n      <li><a href=\"#\">House & Decor</a></li>\n    </ul>\n\n\n\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/side-panel/side-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/side-panel/side-panel.component.ts ***!
  \****************************************************/
/*! exports provided: SidePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidePanelComponent", function() { return SidePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent() {
    }
    SidePanelComponent.prototype.ngOnInit = function () {
    };
    SidePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-panel',
            template: __webpack_require__(/*! ./side-panel.component.html */ "./src/app/side-panel/side-panel.component.html"),
            styles: [__webpack_require__(/*! ./side-panel.component.css */ "./src/app/side-panel/side-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidePanelComponent);
    return SidePanelComponent;
}());



/***/ }),

/***/ "./src/app/women/women.component.css":
/*!*******************************************!*\
  !*** ./src/app/women/women.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/women/women.component.html":
/*!********************************************!*\
  !*** ./src/app/women/women.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"classInnerContainer\">\n  <ul>\n    <li *ngFor = \"let cloth of wClothing\">\n      <div class=\"col-md-3 classCard1\" *ngFor = \"let fWear of cloth.western_wear\" style=\"width: 23%;height:370px;margin-bottom: 10px;\">\n            <div class=\"classImage\">\n                <img [src]='fWear.imgUrl' alt=\"Avatar\" [ngStyle]=\"imgStyle\">\n            </div>\n            <div [ngClass]=\"'classContainer'\" [ngSwitch]=\"fWear.stock\">\n              <div><a href= '#'>{{fWear.product_name}}</a></div>\n              <div class=\"classPrice\">{{fWear.price | currency:'INR'}}</div>\n              <div class=\"classRetailPrice\">{{fWear.retail_price | currency:'INR'}}</div>\n              <div *ngSwitchCase=\"'In stock'\" style=\"color:blue;\">In stock</div>\n              <div *ngSwitchCase=\"'Out of stock'\" style=\"color:red;\">Out of stock</div>\n              <div *ngSwitchDefault>Nothing found</div>\n            </div>\n      </div>\n      &nbsp;\n    </li>\n  </ul>\n</div>\n\n<div class=\"classInnerContainer\">\n  <ul>\n    <li *ngFor = \"let cloth of wClothing\">\n      <div class=\"col-md-3 classCard1\" *ngFor = \"let eWear of cloth.ethnic_wear\" style=\"width: 23%;height:370px;margin-bottom: 10px;\">\n        <div class=\"classImage\">\n            <img [src]='eWear.imgUrl' alt=\"Avatar\" [ngStyle]=\"imgStyle\">\n        </div>\n        <div [ngClass]=\"'classContainer'\">\n          <div class=\"classProductName\"><a href= '#'>{{eWear.product_name}}</a></div>\n          <div class=\"classPrice\">{{eWear.price | currency:'INR'}}</div>\n          <div class=\"classRetailPrice\">{{eWear.retail_price | currency:'INR'}}</div>\n        </div>\n      </div>\n      &nbsp;\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/women/women.component.ts":
/*!******************************************!*\
  !*** ./src/app/women/women.component.ts ***!
  \******************************************/
/*! exports provided: WomenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenComponent", function() { return WomenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WomenComponent = /** @class */ (function () {
    function WomenComponent() {
        this.wClothing = [{
                western_wear: [
                    { 'product_name': 'BIBA Straight Cotton Kurta',
                        'price': 499,
                        'retail_price': 999,
                        'imgUrl': './assets/womens_clothing/western/img1.jpg',
                        'stock': 'In stock'
                    },
                    { 'product_name': 'Styleville.in Floral Regular Fit Top',
                        'price': 479,
                        'retail_price': 1999,
                        'imgUrl': './assets/womens_clothing/western/img2.jpg',
                        'stock': 'Out of stock'
                    },
                    { 'product_name': 'AKA CHIC Body Blouse Shirt',
                        'price': 638,
                        'retail_price': 1599,
                        'imgUrl': './assets/womens_clothing/western/img3.jpg',
                        'stock': 'Out of stock'
                    },
                    { 'product_name': 'Symbol Amazon Brand Jumpsuit',
                        'price': 599,
                        'retail_price': 1799,
                        'imgUrl': './assets/womens_clothing/western/img4.jpg',
                        'stock': 'In stock'
                    }
                ],
                ethnic_wear: [
                    { 'product_name': 'Womanista Synthetic Saree with Blouse Piece',
                        'price': 1599,
                        'retail_price': 3799,
                        'imgUrl': './assets/womens_clothing/ethnic/img1.jpg'
                    },
                    { 'product_name': 'Amazon Brand- Myx A-Line Kurta',
                        'price': 519,
                        'retail_price': 1299,
                        'imgUrl': './assets/womens_clothing/ethnic/img2.jpg'
                    },
                    { 'product_name': 'Kashish by Shoppers Stop Womens Round Neck Solid Cape Gownt',
                        'price': 1899,
                        'retail_price': 2799,
                        'imgUrl': './assets/womens_clothing/ethnic/img4.jpg'
                    },
                    { 'product_name': 'Kashish Womens Round Neck Embroidered Palazzo Suit',
                        'price': 1249,
                        'retail_price': 2499,
                        'imgUrl': './assets/womens_clothing/ethnic/img5.jpg'
                    }
                ]
            }];
        this.imgStyle = {
            'width': '180px',
            'height': '250px'
        };
    }
    WomenComponent.prototype.ngOnInit = function () {
    };
    WomenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-women',
            template: __webpack_require__(/*! ./women.component.html */ "./src/app/women/women.component.html"),
            styles: [__webpack_require__(/*! ./women.component.css */ "./src/app/women/women.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WomenComponent);
    return WomenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular2\product-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map