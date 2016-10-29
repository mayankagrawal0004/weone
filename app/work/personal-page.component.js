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
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var PersonalPageComponent = (function () {
    function PersonalPageComponent(_profservice, _router) {
        this._profservice = _profservice;
        this._router = _router;
        this.outputPath = 'www.google.com';
        this.showButton = false;
    }
    PersonalPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profservice.getDetails().subscribe(function (prof) { return _this.prof = prof; }, function (error) { return _this.errorMessage = error; });
        //this._productservice.getProducts().subscribe(proddebug => this.proddebug = proddebug,error => this.errorMessage = <any>error);
        console.log("ng-onint running");
    };
    PersonalPageComponent.prototype.toggleImage = function () {
        this.showButton = !this.showButton;
    };
    PersonalPageComponent.prototype.onclick = function () {
        this._router.navigate(['/alternate']);
    };
    PersonalPageComponent = __decorate([
        core_1.Component({
            selector: 'pm-personal',
            templateUrl: 'app/work/personal-page.component.html',
            styleUrls: ['app/work/personal-page.component.css'],
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], PersonalPageComponent);
    return PersonalPageComponent;
}());
exports.PersonalPageComponent = PersonalPageComponent;
//# sourceMappingURL=personal-page.component.js.map