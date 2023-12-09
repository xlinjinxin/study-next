"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@nestjs/common");
var AppService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppService = _classThis = /** @class */ (function () {
        function AppService_1() {
        }
        AppService_1.prototype.getHello = function () {
            return 'Hello World!';
        };
        return AppService_1;
    }());
    tslib_1.__setFunctionName(_classThis, "AppService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        tslib_1.__esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        tslib_1.__runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppService = _classThis;
}();
exports.AppService = AppService;
