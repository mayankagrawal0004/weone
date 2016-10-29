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
var ProfessionalDetailComponent = (function () {
    function ProfessionalDetailComponent(_routed, _router, _productService) {
        this._routed = _routed;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = "Project Details";
    }
    ProfessionalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("print something");
        this.sub = this._routed.params.subscribe(function (params) {
            var id = +params['id'];
            console.log("print something to check" + id);
            _this.getProduct(id);
        });
    };
    ProfessionalDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProfessionalDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        console.log("print if it is coming here" + id);
        this._productService.getDetail(id).subscribe(function (profdetail) { return _this.profdetail = profdetail; }, function (error) { return _this.errorMessage = error; });
    };
    ProfessionalDetailComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/work/professionaldetail.component.html",
            styleUrls: ['app/work/professionaldetail.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], ProfessionalDetailComponent);
    return ProfessionalDetailComponent;
}());
exports.ProfessionalDetailComponent = ProfessionalDetailComponent;
//# sourceMappingURL=professionaldetail.component.js.map