"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var UserService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = typeorm_1.Repository;
    var UserService = _classThis = /** @class */ (function (_super) {
        tslib_1.__extends(UserService_1, _super);
        function UserService_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return UserService_1;
    }(_classSuper));
    tslib_1.__setFunctionName(_classThis, "UserService");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        tslib_1.__esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        tslib_1.__runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserService = _classThis;
}();
exports.UserService = UserService;
