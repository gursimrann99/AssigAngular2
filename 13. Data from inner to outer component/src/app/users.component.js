"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var UsersComponent = (function () {
    function UsersComponent() {
        this.childEvent = new core_2.EventEmitter();
        this.child2Event = new core_2.EventEmitter();
    }
    UsersComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    UsersComponent.prototype.onClick = function (id) {
        this.child2Event.emit(document.getElementById(id).innerHTML);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-usersComp',
        template: " <label>Click on any user that will be displayed in parent comp</label><br>\n            <ul>\n              <li id=\"1\" (click)=\"onClick(1)\">Guru</li>\n              <li id=\"2\" (click)=\"onClick(2)\">Bhatia</li>\n              <li id=\"3\" (click)=\"onClick(3)\">Singh</li>\n              </ul>\n              <label>Enter something: </label><input type=\"text\" #childValue (keyup)=\"onChange(childValue.value)\">",
        outputs: ['childEvent', 'child2Event']
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map