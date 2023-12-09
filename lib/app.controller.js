"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@nestjs/common");
var AppController = function () {
    var _classDecorators = [(0, common_1.Controller)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getHello_decorators;
    var AppController = _classThis = /** @class */ (function () {
        function AppController_1(appService) {
            this.appService = (tslib_1.__runInitializers(this, _instanceExtraInitializers), appService);
        }
        AppController_1.prototype.getHello = function () {
            return this.appService.getHello();
        };
        return AppController_1;
    }());
    tslib_1.__setFunctionName(_classThis, "AppController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getHello_decorators = [(0, common_1.Get)()];
        tslib_1.__esDecorate(_classThis, null, _getHello_decorators, { kind: "method", name: "getHello", static: false, private: false, access: { has: function (obj) { return "getHello" in obj; }, get: function (obj) { return obj.getHello; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        tslib_1.__runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppController = _classThis;
}();
exports.AppController = AppController;
