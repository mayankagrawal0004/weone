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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var AlternateComponent = (function () {
    function AlternateComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.pageTitle = "Project Details";
    }
    AlternateComponent.prototype.ngOnInit = function () {
        this.prof = this._productService.getDetails();
        //          this._productService.getDetails().subscribe(prof => this.prof = prof,error => this.errorMessage = <any>error);
    };
    AlternateComponent.prototype.onBackclick = function () {
        this._router.navigate(['/prof']);
    };
    AlternateComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/work/alternate.component.html",
            styleUrls: ['app/work/alternate.component.css'],
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], AlternateComponent);
    return AlternateComponent;
}());
exports.AlternateComponent = AlternateComponent;
//# sourceMappingURL=alternate.component.js.map