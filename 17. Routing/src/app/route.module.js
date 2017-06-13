"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var users_component_1 = require("./users.component");
var customer_comp_1 = require("./customer.comp");
var users_detail_comp_1 = require("./users.detail.comp");
var routes = [
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'customer', component: customer_comp_1.CustomerComp },
    { path: 'userDetail/:id', component: users_detail_comp_1.UsersDetailComp }
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], RouteModule);
exports.RouteModule = RouteModule;
exports.routingComps = [users_component_1.UsersComponent, customer_comp_1.CustomerComp, users_detail_comp_1.UsersDetailComp];
//# sourceMappingURL=route.module.js.map