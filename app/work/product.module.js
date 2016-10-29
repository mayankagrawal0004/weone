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
var product_filter_pipe_1 = require('./product-filter.pipe');
var home_page_component_1 = require('./home-page.component');
var personal_page_component_1 = require('./personal-page.component');
var contact_component_1 = require('./contact.component');
var tech_component_1 = require('./tech.component');
var product_service_1 = require('./product.service');
var star_component_1 = require('./star.component');
var product_detail_component_1 = require('./product-detail.component');
var router_1 = require('@angular/router');
var product_guard_service_1 = require('./product-guard.service');
var shared_module_1 = require('../shared/shared.module');
var professionaldetail_component_1 = require('./professionaldetail.component');
var alternate_component_1 = require('./alternate.component');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild([
                    { path: 'prof', component: personal_page_component_1.PersonalPageComponent },
                    { path: 'prof/:id', component: professionaldetail_component_1.ProfessionalDetailComponent },
                    // {path: 'profesional/:id',
                    //canActivate:[ProductDetailGuard],
                    //component:ProductDetailComponent},
                    { path: 'tech', component: tech_component_1.TechComponent },
                    { path: 'Contact', component: contact_component_1.ContactComponent },
                    { path: 'alternate', component: alternate_component_1.AlternateComponent },
                ])],
            exports: [router_1.RouterModule],
            declarations: [
                home_page_component_1.HomePageComponent,
                personal_page_component_1.PersonalPageComponent,
                product_filter_pipe_1.ProductFilterPipe,
                star_component_1.StarComponent,
                contact_component_1.ContactComponent,
                tech_component_1.TechComponent,
                professionaldetail_component_1.ProfessionalDetailComponent,
                alternate_component_1.AlternateComponent,
                product_detail_component_1.ProductDetailComponent],
            providers: [product_service_1.ProductService, product_guard_service_1.ProductDetailGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map