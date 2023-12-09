"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var tslib_1 = require("tslib");
// user.entity.ts
var typeorm_1 = require("typeorm");
var role_entity_1 = require("./role.entity");
// @Entity()装饰器自动从所有类生成一个SQL表，以及他们包含的元数据
// @Entity('users') // sql表名为users
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _roles_decorators;
    var _roles_initializers = [];
    var _createAt_decorators;
    var _createAt_initializers = [];
    var _updateAt_decorators;
    var _updateAt_initializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            // 主键装饰器，也会进行自增
            this.id = (tslib_1.__runInitializers(this, _instanceExtraInitializers), tslib_1.__runInitializers(this, _id_initializers, void 0));
            // 列装饰器
            this.username = tslib_1.__runInitializers(this, _username_initializers, void 0);
            // @Column('json', { nullable: true }) json格式且可为空
            this.password = tslib_1.__runInitializers(this, _password_initializers, void 0);
            // 定义与其他表的关系
            // name 用于指定创中间表的表名
            this.roles = tslib_1.__runInitializers(this, _roles_initializers, void 0);
            this.createAt = tslib_1.__runInitializers(this, _createAt_initializers, void 0);
            this.updateAt = tslib_1.__runInitializers(this, _updateAt_initializers, void 0);
        }
        return User_1;
    }());
    tslib_1.__setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _username_decorators = [(0, typeorm_1.Column)()];
        _password_decorators = [(0, typeorm_1.Column)()];
        _roles_decorators = [(0, typeorm_1.JoinTable)({ name: 'user_roles' }), (0, typeorm_1.ManyToMany)(function (type) { return role_entity_1.Role; }, function (role) { return role.users; }, { cascade: true })];
        _createAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updateAt_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        tslib_1.__esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _roles_decorators, { kind: "field", name: "roles", static: false, private: false, access: { has: function (obj) { return "roles" in obj; }, get: function (obj) { return obj.roles; }, set: function (obj, value) { obj.roles = value; } }, metadata: _metadata }, _roles_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _createAt_decorators, { kind: "field", name: "createAt", static: false, private: false, access: { has: function (obj) { return "createAt" in obj; }, get: function (obj) { return obj.createAt; }, set: function (obj, value) { obj.createAt = value; } }, metadata: _metadata }, _createAt_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _updateAt_decorators, { kind: "field", name: "updateAt", static: false, private: false, access: { has: function (obj) { return "updateAt" in obj; }, get: function (obj) { return obj.updateAt; }, set: function (obj, value) { obj.updateAt = value; } }, metadata: _metadata }, _updateAt_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        tslib_1.__runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
