"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var tslib_1 = require("tslib");
// user.controller.ts
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
// 设置swagger文档标签分类
var UserController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('用户模块'), (0, common_1.Controller)('user')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _findOne_decorators;
    var _update_decorators;
    var _remove_decorators;
    var UserController = _classThis = /** @class */ (function () {
        function UserController_1(userService) {
            this.userService = (tslib_1.__runInitializers(this, _instanceExtraInitializers), userService);
        }
        UserController_1.prototype.create = function (createUserDto) {
            console.log(this.userService, 'this.userService');
            return this.userService.create();
        };
        // @Get('list')
        // @ApiOperation({
        //   summary: '获取user列表',
        // })
        // findAll() {
        //   return this.userService.findAll();
        // }
        UserController_1.prototype.findOne = function (id) {
            return this.userService.findOne({ where: { id: id } });
        };
        UserController_1.prototype.update = function (id, updateUserDto) {
            return this.userService.update(+id, { username: 'Rizzrak' });
        };
        UserController_1.prototype.remove = function (id) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var timbers;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userService.find({
                                where: { id: id },
                            })];
                        case 1:
                            timbers = _a.sent();
                            return [2 /*return*/, this.userService.remove(timbers)];
                    }
                });
            });
        };
        return UserController_1;
    }());
    tslib_1.__setFunctionName(_classThis, "UserController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _create_decorators = [(0, common_1.Post)('create'), (0, swagger_1.ApiOperation)({
                summary: '添加用户', // 接口描述信息
            })];
        _findOne_decorators = [(0, common_1.Get)('list/:id'), (0, swagger_1.ApiOperation)({
                summary: '根据id获取user',
            })];
        _update_decorators = [(0, common_1.Patch)('list/:id'), (0, swagger_1.ApiOperation)({
                summary: '根据id修改user',
            })];
        _remove_decorators = [(0, common_1.Delete)('list/:id'), (0, swagger_1.ApiOperation)({
                summary: '根据id删除user',
            })];
        tslib_1.__esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        tslib_1.__esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        tslib_1.__esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        tslib_1.__esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: function (obj) { return "remove" in obj; }, get: function (obj) { return obj.remove; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        tslib_1.__runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserController = _classThis;
}();
exports.UserController = UserController;
