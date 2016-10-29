"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var HomePageComponent = (function () {
    function HomePageComponent(_productservice) {
        this._productservice = _productservice;
        this.yourName = 'Vipur Surana';
        this.product = 'app/work/20160904_175345.jpg';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showButton = false;
    }
    HomePageComponent.prototype.toggleImage = function () {
        this.showButton = !this.showButton;
    };
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productservice.getProducts().subscribe(function (proddebug) { return _this.proddebug = proddebug; }, function (error) { return _this.errorMessage = error; });
        console.log("ng-onint running");
    };
    HomePageComponent.prototype.onRatingClicked = function (message) {
        this.yourName = 'Product List' + message;
    };
    HomePageComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/work/home-page.component.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map