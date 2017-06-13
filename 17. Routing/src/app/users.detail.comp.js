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
var router_1 = require("@angular/router");
var UsersDetailComp = (function () {
    function UsersDetailComp(route) {
        this.route = route;
    }
    UsersDetailComp.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
    };
    return UsersDetailComp;
}());
UsersDetailComp = __decorate([
    core_1.Component({
        template: '',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivateRoute !== "undefined" && router_1.ActivateRoute) === "function" && _a || Object])
], UsersDetailComp);
exports.UsersDetailComp = UsersDetailComp;
var _a;
//# sourceMappingURL=users.detail.comp.js.map