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
var name_service_1 = require("./name.service");
var UsersComponent = (function () {
    function UsersComponent(_nameService) {
        this._nameService = _nameService;
        this.names = [];
    }
    ;
    UsersComponent.prototype.ngOnInit = function () {
        this.names = this._nameService.getNames();
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-usersComp',
        template: "\n    <p *ngIf=\"names.length == 0 \">No Name to display</p>\n    <table *ngIf=\"names.length > 0 \">\n      <thead>\n        <th>Name</th>\n        <th>Location</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let name of names\">\n          <td>{{name.fname}}</td>\n          <td>{{name.location}}</td>\n        </tr>\n      </tbody>\n    </table>",
        styles: ["table {\n  border-style: double;\n  }"],
        providers: [name_service_1.NameService]
    }),
    __metadata("design:paramtypes", [name_service_1.NameService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map