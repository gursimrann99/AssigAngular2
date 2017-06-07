"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Names = [
    { id: 1, fname: 'Guru', location: 'Ambala' },
    { id: 2, fname: 'Singh', location: 'Chandigarh' },
    { id: 3, fname: 'Bhatia', location: 'Bangalore' }
];
var UsersComponent = (function () {
    function UsersComponent() {
        this.date = new Date();
        this.names = Names;
    }
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-usersComp',
        template: "\n    <p *ngIf=\"names.length == 0 \">No Name to display</p>\n    <table *ngIf=\"names.length > 0 \">\n      <thead>\n        <th>Name</th>\n        <th>Location</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let name of names\">\n          <td>{{name.fname | uppercase}}</td>\n          <td>{{name.location | lowercase}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <h3>{{230000 | currency:'INR':true}}</h3>\n    <h4>{{date | date:'shortDate'}}</h4>",
        styles: ["table {\n  border-style: double;\n  }"]
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map