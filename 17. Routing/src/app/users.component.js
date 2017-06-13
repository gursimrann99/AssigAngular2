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
var UsersComponent = (function () {
    function UsersComponent(router) {
        this.router = router;
        this.users = [
            { id: 1, name: "Guru", gender: "male", age: "22" },
            { id: 2, name: "Emma", gender: "female", age: "24" },
            { id: 3, name: "Singh", gender: "male", age: "23" },
            { id: 4, name: "kim", gender: "female", age: "21" }
        ];
    }
    UsersComponent.prototype.onClick = function (user) {
        this.router.navigate(['/userDetail', user.id]);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-usersComp',
        template: "<h3>Users Comp</h3>\n              <ul>\n                <li (click)=\"onClick(user)\" *ngFor= \"let user of users\">{{user.name}}</li>\n              </ul>",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], UsersComponent);
exports.UsersComponent = UsersComponent;
var _a;
//# sourceMappingURL=users.component.js.map