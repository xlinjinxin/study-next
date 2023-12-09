"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@nestjs/common");
var user_service_1 = require("./user.service");
var user_controller_1 = require("./user.controller");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("../enties/user.entity");
var UserModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
            providers: [user_service_1.UserService],
            controllers: [user_controller_1.UserController],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UserModule = _classThis = /** @class */ (function () {
        function UserModule_1() {
        }
        return UserModule_1;
    }());
    tslib_1.__setFunctionName(_classThis, "UserModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        tslib_1.__esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        tslib_1.__runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserModule = _classThis;
}();
exports.UserModule = UserModule;
