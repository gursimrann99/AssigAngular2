"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NameService = (function () {
    function NameService() {
    }
    NameService.prototype.getNames = function () {
        return [
            { id: 1, fname: 'Guru', location: 'Ambala' },
            { id: 2, fname: 'Singh', location: 'Chandigarh' },
            { id: 3, fname: 'Bhatia', location: 'Bangalore' }
        ];
    };
    return NameService;
}());
NameService = __decorate([
    core_1.Injectable()
], NameService);
exports.NameService = NameService;
//# sourceMappingURL=name.service.js.map